import React, {useState} from 'react'
import { Form, Container } from "./style";
import Input from "../../Components/Input/index";
import Botao from "../../Components/Botao/index";
const Login = () => {

    const handleSubmit = async () => {
        alert('Login')
    }

    const handleChange = (event) =>{
        console.log('Digitando....',event.target.name, event.targe.value)
    }

  return (
    <div className="App">
      <Container>
        <Form>
          <Input
            name="email"
            placeholder="Digite o seu e-mail"
            onChange={handleChange}
            type="email"
          />
          <Input
            name="password"
            placeholder="Digite a sua senha"
            onChange={handleChange}
            type="password"
          />
          <Botao
            type="submit"
            text="Entrar!"
            onClick={handleSubmit}
          
          />
          <h1>Entre no seu perfil</h1>

          <div>
            <p>Não possui conta?</p>
            <a>Cadastrar</a>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
