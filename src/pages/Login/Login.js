import React from 'react';
import './Login.css'
import Title from './components/Title/Title';
import Label from './components/label/Label';
import Input from './components/Input/Input';


const Login = () => {
    return (
        <div className='login-container'>
            <Title text='Ecas' />
            <Label text='Usuario' />
            <Input/>
            <Label text='Contraseña' />
            <Input/>
        </div>
    );
}
export default Login;

