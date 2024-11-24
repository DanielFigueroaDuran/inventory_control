import { create } from "zustand";
import { supabase } from "../supabase/supabase.config";
import { insertUsers } from "../index.js";

export const useUsersStorage = create((set, get) => {
      insertAdministratorUser: async (params) => {
            const { data, error } = await supabase.auth.signUp({
                  email: params.email,
                  password: params.password
            });
            console.log(data);

            if (error) return;
            await insertUsers({ id_auth: data.user.id, date_registration: new Date(), user_type: "admin" });
      };
});