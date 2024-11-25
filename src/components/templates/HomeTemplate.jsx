import styled from "styled-components";
import { Btnsave } from "../../components/moleculas/Btnsave";
import { useAuthStore } from "../../store/AuthStore";
import { useNavigate } from "react-router-dom";
export function HomeTemplate() {
  const { signOut } = useAuthStore();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(); // Ejecuta la función de cierre de sesión del store
      console.log("Sesión cerrada exitosamente");
      navigate("/login"); // Redirige al usuario a la página de inicio de sesión
    } catch (error) {
      console.error("Error durante el cierre de sesión:", error.message);
      alert("Hubo un problema al cerrar la sesión. Inténtalo nuevamente.");
    }
  };

  return (
    <Container>
      <h1>Home template</h1>
      <Btnsave
        title="Cerrar sesión"
        bgcolor="#fff"
        functions={handleSignOut}
      />
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  background-color: ${(props) => props.theme.bgtotal};
  color: ${({ theme }) => theme.text};
  width: 100%;
`;
