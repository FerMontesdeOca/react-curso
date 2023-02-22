import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLoginContext } from '../context/LoginContext'
import './RegisterScreen.scss'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const RegisterScreen = () => {
    const { user, loading, register } = useLoginContext()
    
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        register(values)
    }

    return (
        <div className='login-screen'>
            <div className='login'> 
                <h2>Register</h2>
                <Box onSubmit={handleSubmit} className="formLogin" component="form"
                       sx={{
                        '& > :not(style)': { m: 1, width: '45ch' },
                          }}
                      noValidate
                      autoComplete="on">
                      <TextField id="outlined-basic" label="Correo" variant="outlined" type='email' value={values.email} onChange={handleInputChange} name="email"/>
                      <TextField id="outlined-basic" label="password" variant="outlined" type='password' value={values.password} onChange={handleInputChange} name="password"/>
                    
                <div className='buttonsRegister'>
                    <button className='btn btn-primary' disabled={loading}>{loading ? 'Cargando...' : 'Ingresar'}</button>
                    {user.error && <p className='error'>{user.error}</p>}
                </div>
                </Box>
                <Link to="/login" className='linkForm'>Ya estoy registrado</Link>
            </div>
        </div>
    )
}

export default RegisterScreen