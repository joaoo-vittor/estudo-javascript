import React from 'react';

import { ErrorPage } from './styled';

import { Container } from '../../styles/GlobalStyles';

export default function Page404() {
  return (
    <Container>
      <ErrorPage>Essa página não existe!</ErrorPage>
    </Container>
  );
}
