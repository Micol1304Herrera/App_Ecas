import React, { useState } from 'react';
import './Login.css';
import Input from './components/Input/Input';
import logo3 from '../Login/imagenes/logo3.png'

const Login = () => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [ passwordError, setPasswordError] = useState(false);

    function handleChange(name, value) {
        if (name === 'usuario') {
            setUser(value)
        } else {
            if(value.length < 6) {
                setPasswordError(true);
            } else {
                setPasswordError(false);
                setPassword(value)
            }
            
        }
    };

    function handleSubmit() {
        let account = { user, password }
        if (account) {
            console.log("account:", account)
        }
    };

    console.log('usuario:', user)
    console.log('password:', password)
    return (
        <div className='login-container' >
            <div className='login-content'>

                <div >
                    <img alt='text' src={logo3} />
                </div>

                <Input
                    attribute={{
                        id: 'usuario',
                        name: 'usuario',
                        type: 'text',
                        placeholder: 'Correo@Ecas.cl o Rut',
                    }}
                    handleChange={handleChange}
                />

                <Input
                    attribute={{
                        id: 'contraseña',
                        name: 'contraseña',
                        type: 'password',
                        placeholder: 'Clave',
                    }}
                    handleChange={handleChange}
                    param={passwordError}
                />
                <div className='submit-button-container'>
                    <button onClick={handleSubmit} className='submit'>
                        Entrar
                    </button>
                </div>
            </div>
        </div>
    )
};
export default Login;

