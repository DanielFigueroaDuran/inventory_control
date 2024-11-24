import { supabase } from "./supabase.config"

export const insertUsers = async (params) => {
      const { data, error } = await supabase.from(users_auth).insert(params).maybeSingle();
}