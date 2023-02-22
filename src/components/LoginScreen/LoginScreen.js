// import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLoginContext } from '../context/LoginContext'
import useForm from '../../hooks/useForm'
import './LoginScreen.scss'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FaUserCircle } from "react-icons/fa"
const LoginScreen = () => {
    const { login, user, loading, googleLogin } = useLoginContext()
    
    const { values, handleInputChange } = useForm({
        email: '',
        password: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        
        login(values)
    }

    return (
        <div className='login-screen'>
            <div className='login'> 
                <div className='loginImg'>
                <FaUserCircle className='imgLogin'/>
                <h2>Login</h2>
                </div>
                
                <Box onSubmit={handleSubmit} className="formLogin"component="form"
                       sx={{
                        '& > :not(style)': { m: 1, width: '45ch' },
                          }}
                      noValidate
                      autoComplete="on">
                      <TextField id="outlined-basic" label="Correo" variant="outlined" type='email' value={values.email} onChange={handleInputChange} name="email"/>
                      <TextField id="outlined-basic" label="password" variant="outlined" type='password' value={values.password} onChange={handleInputChange} name="password"/>
                <div className='buttonsForm'>
                    <button className='btn btn-primary' disabled={loading}>{loading ? 'Cargando...' : 'Ingresar'}</button>
                    {user.error && <p className='error'>{user.error}</p>}
                    <button className='btn btn-primary my-2' onClick={googleLogin}>Ingresar con google</button>
                </div>
                </Box>
                <Link to="/register" className='linkForm'>Registrarme</Link>
            </div>
        </div>
    )
}

export default LoginScreen