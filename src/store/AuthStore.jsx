import { useState } from "react";
import { create } from "zustand";
export const useAuthStore=create((set,get)=>({
    signInWithEmail: async (p)=>{
        const { data, error } = await supabase.auth.signInWithPassword({
            email: p.correo,
            password: p.pass
          })
          if(error){
            return null;
          }
    }
}))