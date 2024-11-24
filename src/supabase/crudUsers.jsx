import Swal from "sweetalert2";
import { supabase } from "./supabase.config"

export const insertUsers = async (params) => {
      const { data, error } = await supabase.from(users_auth).insert(params).maybeSingle();
      if (error) {
            Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: `Error al insertar un Usuario! ${error.message} `,
                  timer: 1500
            });
      };

      if (data) return data;

};