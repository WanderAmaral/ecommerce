import {
  DocumentData,
  QueryDocumentSnapshot,
  SnapshotOptions,
} from "firebase/firestore";
import Category from "@/types/category.type";
import User from "@/types/users.types";

export const categoryConverter = {
  toFirestore(category: Category): DocumentData { // toFirestore, envia dados
    return { ...category };
  },

  fromFirestore(                                // fomFirestore, recebe dados
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): Category {
    const data = snapshot.data(options);

    return {
      id: data.id,
      displayName: data.displayName,
      imageUrl: data.imageUrl,
      name: data.name,
      products: data.products
    };
  },
};

export const UserConverter = {
  toFirestore(user: User): DocumentData { // toFirestore, envia dados
    return { ...user};
  },

  fromFirestore(                                // fomFirestore, recebe dados
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): User {
    const data = snapshot.data(options);

    return {
      id: data.id,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName
    };
  },
};
