import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  serverTimestamp,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../../firebase";
import { apiSlice } from "./api";

export const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addProduct: builder.mutation({
      queryFn: async (product) => {
        try {
          await addDoc(collection(db, "products"), product);
          return {
            data: product,
          };
        } catch (error) {
          return { error: error };
        }
      },
      invalidatesTags: ["products"],
    }),

    updateProduct: builder.mutation({
      async queryFn({ id, updates }) {
        try {
          const ref = doc(db, "products", id);
          await updateDoc(ref, {
            ...updates,
            updatedAt: serverTimestamp(),
          });
          return { data: true };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: ["products"],
    }),

    getAllProducts: builder.query({
      async queryFn() {
        try {
          const refProductCollection = collection(db, "products");
          const data = await getDocs(refProductCollection);
          const filteredData = data.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          return { data: filteredData, error: null };
        } catch (error) {
          console.error(error);
          return { error: "Failed to fetch products data" };
        }
      },
      providesTags: ["products"],
    }),

    getProductsByCategory: builder.query({
      async queryFn(categoryId) {
        try {
          const q = query(
            collection(db, "products"),
            where("categoryId", "==", categoryId),
          );
          const snapshot = await getDocs(q);
          return {
            data: snapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            })),
          };
        } catch (error) {
          return { error: error };
        }
      },
    }),
  }),
});

export const {
  useAddProductMutation,
  useUpdateProductMutation,
  useGetAllProductsQuery,
  useGetProductsByCategoryQuery,
} = productApi;
