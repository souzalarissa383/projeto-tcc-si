import React, { useState } from 'react'
import { Form, Container } from './style'
import Input from '../../Components/Input/index'
import Botao from '../../Components/Botao/index'
import { validarEmail, validarSenha } from '../../Utils/validadores'
import { NavLink } from 'react-router-dom'

const Login = () => {
    const [loading, setLoading] = useState()
    const [form, setForm] = useState([])
    const navigate = useNavigate()
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      alert("Login");
      setLoading(false);
    } catch (err) {
      alert("Algo deu errado com o Login" + err)
    }
  };

  const handleChange = (event) => {
    console.log("Digitando...", event.target.name, event.targe.value)
    setForm({ ...Form, [event.target.name]: event.target.value })
    console.log("Form", form)
  };

  const validadorInput = () => {
    return validarEmail(form.email) && validarSenha(form.password)
  }

  console.log("Form esta valido? ", validadorInput());
  return (
    <div className="App">
      <Container>
        <Form>
          <h1>Entre no seu perfil</h1>
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
            text="Entrar"
            onClick={handleSubmit}
            disabled={loading === true || !validadorInput()}
          />

          <div>
            <p>Não possui conta?</p>
            <NavLink to="cadastrar">Cadastrar</NavLink>

          </div>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
