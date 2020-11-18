import React from 'react';
import {} from 'react-native';
// import api from '../../services/api';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  Title,
  Label,
  ForgotPassword,
  ForgotPasswordText,
  Footer,
  FooterText,
} from './style';

const Login: React.FC = () => {
  return (
    <Container>
      <Title>SisVistorias2.0</Title>
      <Label>Faça seu Login</Label>
      <Input name="email" icon="mail" placeholder="E-mail" />
      <Input name="password" icon="lock" placeholder="Senha" />

      <Button
        onPress={() => {
          console.log('Deu');
        }}>
        Entrar
      </Button>
      <ForgotPassword>
        <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
      </ForgotPassword>
      <Footer>
        <FooterText>Desenvolvido com ♥</FooterText>
      </Footer>
    </Container>
  );
};

export default Login;
