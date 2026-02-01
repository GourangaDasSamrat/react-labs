import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query";
import {
  collection,
  getDocs,
  doc,
  addDoc,
  query,
  where,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../firebase";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fakeBaseQuery(),
  tagTypes:["products","categories"],
  endpoints:(builder)=>({
    getAllProducts:builder.query({
        async queryFn(){
            try {
                const refProductCollection=collection(db,"products")
                const data=await getDocs(refProductCollection)
                const filteredData=data.docs.map((doc)=>({
                    id:doc.id,
                    ...doc.data()
                }))
                return{data:filteredData,error:null}
            } catch (error) {
              console.error(error);
                return{error:"Failed to fetch products data"}
            }
        },
        providesTags:["products"]
    }),

    updateProduct:builder.mutation({
        async queryFn({id,updates}){
          try {
            const ref=doc(db,"products",id)
            await updateDoc(ref,{
              ...updates,
              updatedAt:serverTimestamp(),
            })
            return{data:true}
          } catch (error) {
              return{error}
          }
        },
        invalidatesTags:["products"]
    }),

    getProductsByCategory:builder.query({
      async queryFn(categoryId){
try {
const q=query()
} catch (error) {

}
      }
    })
  })
});
