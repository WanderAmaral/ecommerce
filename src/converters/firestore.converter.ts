import {
  DocumentData,
  QueryDocumentSnapshot,
  SnapshotOptions,
} from "firebase/firestore";
import Category from "@/types/category.type";

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
