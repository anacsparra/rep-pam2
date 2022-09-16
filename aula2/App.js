import * as React from 'react';
import { Text, View, Image, TextInput, button} from 'react-native';
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
const Button = styled.Button`
  cursor: pointer;
  font-size: 16px;
  padding: 15px 32px;
  text-align: center;
  background-color: red;
`
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
export default function App() {
  return (
    <Container>
        <Titulo>Seja bem vindo a seu Site de Programação! </Titulo>
        <Img source = {{uri: img}}></Img>
        <br></br>
        <Titulo>Faça seu login! </Titulo>
        <Formulario placeholder="Digite seu Email."/>
        <Formulario placeholder="Digite sua Senha."/>
        <Button>Fazer Login!</Button>
      

    </Container>
  );
}