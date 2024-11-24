import { create } from "zustand";
import { supabase } from "../supabase/supabase.config";
import { insertUsers } from "../supabase/crudUsers";

export const useUsersStorage = create((set, get) => ({

      // insertUserAdmin: async (params) => {
      //       try {
      //             const { data, error } = await supabase.auth.signUp({
      //                   email: params.email,
      //                   password: params.password
      //             });

      //             if (error) {
      //                   console.error("Error en el registro del usuario:", error.message);
      //                   return { success: false, error: error.message }; // Devuelve un objeto con éxito y el mensaje de error
      //             }

      //             // console.log("data de registro del Users Auth:", data);

      //             const dataUsers = await insertUsers({
      //                   id_auth: data.user.id,
      //                   date_registration: new Date(),
      //                   user_type: "admin"
      //             });

      //             if (dataUsers) {
      //                   console.log("Usuario insertado correctamente en la base de datos:", dataUsers);
      //                   return { success: true, data: dataUsers }; // Retorna un objeto exitoso
      //             } else {
      //                   return { success: false, error: "No se pudo insertar en la base de datos" };
      //             }
      //       } catch (err) {
      //             console.error("Error general en insertUserAdmin:", err.message);
      //             return { success: false, error: err.message };
      //       }
      // },
      insertUserAdmin: async (params) => {
            try {
                  const { data, error } = await supabase.auth.signUp({
                        email: params.email,
                        password: params.password
                  });

                  if (error) {
                        // Identificar si el correo ya está registrado
                        if (error.message === "User already registered") {
                              console.warn("El usuario ya está registrado. Procediendo sin registrar de nuevo.");
                              return { success: false, error: "El usuario ya está registrado." };
                        }

                        console.error("Error en el registro del usuario:", error.message);
                        return { success: false, error: error.message };
                  }

                  // Proceso normal para usuarios nuevos
                  const dataUsers = await insertUsers({
                        id_auth: data.user.id,
                        date_registration: new Date(),
                        user_type: "admin"
                  });

                  if (dataUsers) {
                        console.log("Usuario insertado correctamente en la base de datos:", dataUsers);
                        return { success: true, data: dataUsers };
                  } else {
                        return { success: false, error: "No se pudo insertar en la base de datos" };
                  }
            } catch (err) {
                  console.error("Error general en insertUserAdmin:", err.message);
                  return { success: false, error: err.message };
            }
      }
}));