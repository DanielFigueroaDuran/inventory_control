import { useUsersStorage } from '../../store/UsersStore'
import { Btnsave } from '../moleculas/Btnsave'

export const LoginTemplate = () => {
      const { insertAdministratorUser } = useUsersStorage();

      return (
            <div className=' h-screen flex justify-center items-center'>
                  <Btnsave
                        title="Crear Cuenta"
                        bgcolor="#fff"
                  />
            </div>
      )
}

//export default LoginTemplate