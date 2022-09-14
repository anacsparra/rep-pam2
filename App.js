import React from 'react';
import styled from 'styled-components/native';


const Container = styled.View`
flex: 1;
background-color: #fff;
align-items: center;
justify-content: center;
`;
const Title = styled.Text`
color: #000;
text-align: center;
font-size: 16px;
`;


const Button = styled.Button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: palevioletred;
  border: 2px solid palevioletred;
  
  width: 100%;
  transition: 0.5s all ease-out;
  &:hover {
    background-color: palevioletred;
    color: white;
  }
`;
export default () => (
<Container>
  <Title>Hello</Title>
  <Button>Clique Aqui!</Button>
</Container>
);


