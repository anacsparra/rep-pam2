import React from 'react';
import styled from 'styled-components/native';
import img from '../aula2/assets/img/cpu.jpg';

const Container = styled.View`
flex: 1;
background-color: #fff;
align-items: center;
justify-content: center;
`;
const Titulo = styled.Text`
color: #000;
text-align: center;
font-size: 16px;
margin-bottom: 20px;
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
const Button = styled.Button`
height: 40;
background-Color: "purple";
borderWidth: 1;
color: #fff;
font-size: 1em;
padding: 0.25em 1em;
margin: 15;
`;
const Img = styled.Image`
style={{width: 100;
height: 160;
alignSelft: "center";
`;

export default () => (
<Container>
  <Titulo>Seja bem vindo a seu Site de Programação! </Titulo>
  <Img source = {{uri: img}}></Img>
  <Titulo>Faça seu login! </Titulo>
  <Formulario placeholder="Digite seu Email."> </Formulario>
  <Formulario placeholder="Digite sua Senha."> </Formulario>
  <Button>Fazer Login!</Button>
</Container>
);


