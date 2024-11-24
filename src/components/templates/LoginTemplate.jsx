import { useMutation } from '@tanstack/react-query';
import { useUsersStorage } from '../../store/UsersStore';
import { Btnsave } from '../moleculas/Btnsave';
import { useNavigate } from 'react-router-dom';

export const LoginTemplate = () => {
      const navigate = useNavigate();
      const { insertUserAdmin } = useUsersStorage();

      const mutationInsertUser = useMutation({
            mutationKey: ["insertar usuario admin"],

            mutationFn: async () => {
                  try {
                        const params = {
                              email: "prueba2@gmail.com",
                              password: "DLD15819045f"
                        };
                        const result = await insertUserAdmin(params);

                        if (result.success) {
                              console.log("Inicio de sesión exitoso, redirigiendo...");
                              navigate("/");
                        } else {
                              // Manejar el caso de usuario ya registrado
                              if (result.error === "El usuario ya está registrado.") {
                                    console.warn("El usuario ya estaba registrado, redirigiendo...");
                                    navigate("/"); // Opcional: redirige al usuario aunque ya exista
                              } else {
                                    console.error("Error al registrar usuario:", result.error);
                              }
                        }
                  } catch (error) {
                        console.error("Error en la mutación:", error.message);
                  }
            }
      });

      return (
            <div className=' h-screen flex justify-center items-center'>
                  <Btnsave
                        title="Crear Cuenta"
                        bgcolor="#fff"
                        // functions={mutationInsertUser.mutateAsync}
                        functions={async () => {
                              try {
                                    await mutationInsertUser.mutateAsync();
                              } catch (error) {
                                    alert("Error al registrar el usuario. Intenta con un correo diferente.");
                              }
                        }}
                  />
            </div>
      )
}

//export default LoginTemplate