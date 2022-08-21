import styled from 'styled-components';

import { color } from 'styles/theme';
import { media } from 'styles/media';

export const AppHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 75px;

  .contents {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80vw;
    background-color: ${color};

    @media ${media.TABLET} {
      width: 85vw;
    }

    @media ${media.MOBILE} {
      width: 100%;
      padding: 16px;
    }

    .logo {
      display: flex;
      align-items: center;
      .full-logo {
        @media ${media.MOBILE} {
          display: none;
        }
      }

      .fox-icon {
        margin-right: 16px;

        @media ${media.PC} {
          display: none;
        }
        @media ${media.TABLET} {
          display: none;
        }
      }
    }

    .menu {
      display: flex;
      align-items: center;

      .network-btn {
        position: relative;
        display: flex;
        align-items: center;
        padding: 5px 4px;
        border: 1px solid ${color.GRAY01};
        border-radius: 20px;

        .icon {
          width: 12px;
          height: 12px;
          background-color: ${color.MAINNET};
          border-radius: 50%;
          margin-left: 4px;
        }

        .text {
          font-size: 0.75rem;
          color: ${color.GRAY03};
          margin: 4px 8px;

          @media ${media.SMALL_MOBILE} {
            display: none;
          }
        }

        svg {
          margin-right: 4px;
        }
      }

      .account-btn {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 1rem;
        width: 40px;
        height: 40px;
        border: 2px solid ${color.BLUE};
        border-radius: 50%;

        svg {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: rgb(242, 166, 2);
        }
      }
    }
  }
`;
