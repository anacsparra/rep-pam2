import * as React from 'react';
import { Text, View, Image, TextInput, Button} from 'react-native';
import styled from 'styled-components/native';
import img from '../aula2/assets/img/cpu.jpg';


const Container = styled.View`
flex: 1;
background-color: #fff;
align-items: center;
justify-content: center;
`;
const Titulo = styled.Text`
color: #;
text-align: center;
font-size: 16px;
margin-bottom: 20px;
`;
const Img = styled.Image`
width: 250px;
height: 160px;
alignSelft: "center";
border-radius: 20px;
`;
const Formulario = styled.TextInput`
  text-align:center;
  height:50;
  width: 250;
  margin: 10px;
  border: 1px solid black;
  alignSelf: "center";
  border-radius: 10px;
  color= #fff;
`;
function login(){
  alert("Cadastro realizado com sucesso!");
}
export default function App() {
  return (
    <Container>
        <Titulo>Seja bem vindo a seu Site de Programação! </Titulo>
        <Img source = {{uri: img}}></Img>
        <br></br>
        <Titulo>Faça seu login! </Titulo>
        <Formulario placeholder="Digite seu Email."/>
        <Formulario placeholder="Digite sua Senha."/>
        <Button
        title="Fazer login"
        onClick= {login()}
      />
      

    </Container>
  );
}
