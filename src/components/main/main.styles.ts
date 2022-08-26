import styled from 'styled-components';
import { media } from 'styles/media';
import { color } from 'styles/theme';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  min-height: 82vh;
  background-color: ${color.WHITE};
  box-shadow: 0 0 7px 0 rgb(0 0 0 / 8%);

  @media ${media.TABLET} {
    min-height: 90vh;
  }

  @media ${media.MOBILE} {
    min-height: calc(100vh - 75px);
  }

  .overview {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;

    .logo-eth {
      height: 32px;
      width: 32px;
      border-radius: 16px;
      border: 1px solid ${color.GRAY01};
    }

    article {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 16px 0;
      padding: 0 16px;

      span {
        :nth-child(1) {
          font-size: 2rem;
          line-height: 140%;
        }
        :nth-child(2) {
          font-size: 1rem;
          line-height: 140%;
          color: ${color.GRAY03};
        }
      }
    }

    .overview-menu {
      display: flex;
      margin-bottom: 24px;

      .overview-li {
        display: flex;
        flex-direction: column;
        text-align: center;
        font-size: 13px;
        line-height: 140%;
        color: ${color.BLUE};
        cursor: pointer;
        padding: 1px 6px;

        ~ li {
          margin-left: 24px;
        }

        .li-icon {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 36px;
          width: 36px;
          background-color: ${color.BLUE};
          border-radius: 18px;
          margin-top: 6px;
          margin-bottom: 5px;
        }
      }
    }
  }

  .tab {
    height: 100%;
    .tab-menu {
      display: flex;
      box-shadow: 0 3px 4px rgb(135 134 134 / 16%);

      .submenu {
        width: 50%;
        font-size: 0.875rem;
        padding: 16px 8px;
        line-height: 140%;
        text-align: center;
        cursor: pointer;
      }

      .focused {
        width: 50%;
        font-size: 0.875rem;
        padding: 16px 8px;
        line-height: 140%;
        text-align: center;
        cursor: pointer;
        color: ${color.BLUE};
        border-bottom: 2px solid ${color.BLUE};
      }
    }
  }

  .support {
    padding: 10px 0 20px 0;
    text-align: center;
    a {
      color: ${color.BLUE};
      margin-left: 4px;
    }
  }
`;
