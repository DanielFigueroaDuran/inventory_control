import { create } from "zustand";

export const useUsersStorage = create((set, get) => {
      insertAdministratorUser: async (params) => {
            const { data, error } = await supabase.auth.signUp({
                  email: params.email,
                  password: params.password
            });
      };
});