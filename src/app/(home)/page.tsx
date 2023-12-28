"use client";
import { FunctionComponent, useEffect, useState } from "react";
import Categories from "./components/categories.component";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "@/config/firebase-config";
import { useContext } from "react";
import { UserContext } from "@/contexts/user.context";
import Button from "../components/button";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import UserAdm from "@/types/user-adm-type";
import User from "@/types/users.types";



const Home: FunctionComponent = () => {
  

  const { adminUser  } = useContext(UserContext);
  const [isAdministrador, setAdministrador] = useState(false)

  // const isAdmin = currentUser?.email === 'wanderguizi@gmail.com'
  const verificarAdministrador = async (userEmail: string) => {
    const firestore = getFirestore();
    const usersCollection = collection(firestore, 'users');

    // Crie uma consulta para encontrar usuários com o email fornecido
    const q = query(usersCollection, where('email', '==', userEmail));

    try {
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        // Usuário encontrado, é um administrador
        setAdministrador(true)
      } else {
        // Usuário não encontrado, não é um administrador
        setAdministrador(false)
      }
    } catch (error) {
      console.error('Erro ao verificar administrador:', error);
    }
  };

  useEffect(() => {
    // Subscreva-se a alterações no estado de autenticação
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userEmail = user.email;

        if (userEmail === adminUser?.email) {
          // O usuário logado é um administrador, então verifique no Firestore

          verificarAdministrador(userEmail);
        }
      }
    });
  }, [adminUser]);

  

  return (
    <div>
      <Categories />

      {isAdministrador === true && (<Button>Clique-me</Button>)}
    </div>
  );
};

export default Home;
