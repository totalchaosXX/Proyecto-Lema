import { pedirDatos } from '../../helpers/pedirDatos'
import { useState } from 'react'
import './Login.scss'
import {  useNavigate } from "react-router-dom"
import Swal from 'sweetalert2';



const Login = () => {

    const navigate = useNavigate();

   const [values, setValues] = useState({
    email:'',
    password:''
   })

   const handleInputChange = (e) => {
    setValues({
        ...values,
        [e.target.name]:e.target.value
    })
   }

    const handleSubmit = async (e) => {
    
        e.preventDefault()
        const { email, password } = values;

        try {
            // Obtiene los datos de los usuarios
            const users = await pedirDatos();

            // Busca si existe un usuario con las credenciales proporcionadas
            const user = users.find(user => user.usuario === email && user.pass === password);

            if (user) {
                // Redirecciona a otro componente (por ejemplo, 'Dashboard')
               

               navigate("/home");
               
               
            } else {

                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Credenciales incorrectas. Por favor, inténtalo de nuevo.",
                    
                  });
                // Muestra un mensaje de error si las credenciales son incorrectas
                console.log('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
            }
        } catch (error) {
            // Maneja cualquier error de la solicitud de datos
            console.log('Error al obtener los datos de usuarios:', error);
            console.log('Error al obtener los datos de usuarios. Por favor, inténtalo de nuevo más tarde.');
        }
    }

   
   
        return (
            
        
        <>


<section className="flex flex-col md:flex-row h-screen items-center">

  <div className="bg-indigo-800 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
  <div className="flex justify-center items-center h-screen">
		<div>
			<h1 class="text-white font-bold text-4xl font-sans">Proyecto Lema</h1>
			<p class="text-white mt-1">The most popular peer to peer lending at SEA</p>
			<button type="submit" class="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">Read More</button>
		</div>

	</div>
  </div>

  <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center">

    <div className="w-full h-100">


      <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Log in to your account</h1>

      <form className="mt-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-gray-700">Email</label>
          <input value={values.email}
                        onChange={handleInputChange}
                        type="email"
                        placeholder='Email'
                        name='email'
          
          className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required />
        </div>

        <div className="mt-4">
          <label className="block text-gray-700">Contraseña</label>
          <input value={values.password}
                        onChange={handleInputChange}
                        type="password"
                        placeholder='Contraseña'
                        name='password' 
          className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none" required />
        </div>

        <div className="text-right mt-2">
          <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">¿Olvidaste contraseña?</a>
        </div>

        <button type="submit" className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6">Inciar Sesión</button>
      </form>

      <hr className="my-6 border-gray-300 w-full" />

      

      <p className="mt-8">¿No tienes cuenta? <a href="#" className="text-blue-500 hover:text-blue-700 font-semibold">Crea una cuenta</a></p>


    </div>
  </div>

</section>


        </>

        
        
        )
    
}

export default Login