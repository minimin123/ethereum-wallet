import styled from 'styled-components';
import { media } from 'styles/media';
import { color } from 'styles/theme';

export const Main = styled.main`
  margin: 0 auto;
  min-height: 82vh;
  background-color: ${color.WHITE};
  box-shadow: 0 0 7px 0 rgb(0 0 0 / 8%);

  @media ${media.MOBILE} {
    min-height: calc(100vh - 75px);
  }
`;
