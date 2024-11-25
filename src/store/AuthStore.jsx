import { useState } from "react";
import { create } from "zustand";
import { supabase } from "../supabase/supabase.config";

export const useAuthStore = create((set, get) => ({
  signInWithEmail: async (params) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: params.email,
      password: params.pass
    })
    if (error) {
      return null;
    }

  },
  signOut: async () => {

    const { error } = await supabase.auth.signOut();
    if (error) {
      throw new error(`A ocurrido un error durante el cierre`)
    }
  }
}));