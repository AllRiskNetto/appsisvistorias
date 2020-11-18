import React from 'react';
import {TextInputProps} from 'react-native';

import {Container, TextInput, Icon} from './style';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

const Input: React.FC<InputProps> = ({name, icon, ...rest}) => (
  <Container>
    <Icon name={icon} size={20} color="#333" />

    <TextInput {...rest} placeholderTextColor="#757575" />
  </Container>
);

export default Input;
