import React from 'react';
import logo from '../../assets/logo.png';
import styled from '@emotion/styled';

const Wrapper = styled.div({
  display: 'flex',
  alignItems: 'center'
});

export default function Logo() {

  return (
    <Wrapper>
      <img src={logo} height={100} />
    </Wrapper>
  );
}
