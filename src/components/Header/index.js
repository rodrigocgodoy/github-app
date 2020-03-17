import React from 'react';
import { useHistory } from 'react-router-dom';

import logo from '../../assets/logo.png';
import { Container } from './styles';

export default function Header() {
  const history = useHistory();

  return (
    <Container>
      <img src={logo} alt="Marvel App" onClick={() => history.push('/')} />
    </Container>
  );
}
