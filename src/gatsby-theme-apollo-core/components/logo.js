import React from 'react';
import logo from '../../assets/Safepay-logo-01.svg';
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
