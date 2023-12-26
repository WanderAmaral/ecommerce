import { auth, db } from "@/config/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { SignUpForm } from "@/app/create-login/page";

export const onSubmit = async (data: SignUpForm) => {
    try {
      const userCrenditials = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log({ userCrenditials });
      await addDoc(collection(db, "users"), {
        id: userCrenditials.user.uid,
        fisrtName: data.firstName,
        lastName: data.lastName,
        email: userCrenditials.user.email,
      });
    } catch (error) {
      console.log(error);
    }
  };