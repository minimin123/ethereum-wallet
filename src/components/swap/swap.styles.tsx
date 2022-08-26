import styled from 'styled-components';

import { media } from 'styles/media';
import { color } from 'styles/theme';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 460px;
  height: 620px;
  border: 1px solid ${color.GRAY04};
  background-color: ${color.WHITE};
  box-shadow: 0 0 7px 0 rgb(0 0 0 / 8%);
  border-radius: 8px;
  margin: 0 auto;
  overflow: hidden;

  @media ${media.MOBILE} {
    width: 100%;
    min-height: calc(100vh - 75px);
    border: none;
    border-radius: 0;
  }

  .swap-header {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 66px;
    padding-top: 8px;
    padding-bottom: 8px;
    background-color: ${color.GRAY02};

    h1 {
      font-size: 1rem;
      font-weight: bold;
    }

    button {
      position: absolute;
      top: 50%;
      right: 24px;
      transform: translateY(-50%);
      font-size: 0.75rem;
      line-height: 140%;
      color: ${color.BLUE};
    }
  }

  .swap-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 35px 70px;

    .swap-input {
      display: flex;
      flex-direction: column;
      font-weight: 600;

      .search-bar {
        position: relative;
      }

      .swap-input-wrapper {
        display: flex;
        width: 312px;
        height: 60px;
        border: 1px solid ${color.GRAY01};
        border-radius: 6px;
        margin-top: 12px;
        overflow: hidden;

        button {
          position: relative;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          min-width: 140px;
          width: 100%;
          height: 60px;
          padding: 16px 12px;
          font-size: 1.125rem;
          transition: ease-in-out 0.2s;

          .text {
            width: 73px;
            text-align: left;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }

          .text-2 {
            width: 100%;
            text-align: left;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }

          .img-wrapper {
            width: 34px;
            height: 34px;
            border-radius: 50%;
            margin-right: 8px;
            background-color: ${color.GRAY02};

            img {
              width: 34px;
              height: 34px;
              border-radius: 50%;
              box-shadow: 0 2px 4px 0 rgb(0 0 0 / 24%);
            }
          }

          ::after {
            content: '▾';
            position: absolute;
            top: 50%;
            right: 12px;
            transform: translateY(-50%);
            color: ${color.GRAY05};
            font-size: 1.3rem;
          }

          :hover {
            background-color: ${color.GRAY02};
            transition: ease-in-out 0.2s;
          }
        }

        input {
          width: 100%;
          padding: 0 16px;
          font-size: 1.125rem;
          border: none;
          box-sizing: border-box;
          border-left: 1px solid ${color.GRAY01};

          ::placeholder {
            color: ${color.GRAY05};
          }
        }
      }
    }

    p {
      width: 312px;
      font-size: 0.75rem;
      line-height: 140%;
      height: 18px;
      margin: 4px 0 0 8px;
      text-align: left;
      color: ${color.GRAY05};
    }

    .btn-wrapper {
      display: flex;
      justify-content: flex-end;
      width: 312px;
      padding-right: 16px;
      padding-top: 12px;

      .swap-btn {
        svg {
          width: 11px;
          fill: ${color.GRAY05};
        }
        height: 24px;
      }
    }
  }

  .options {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 8px;
    color: ${color.BLUE};
    font-weight: bold;

    svg {
      fill: ${color.BLUE};
      margin-top: -2px;
    }
    .down {
      transform: rotate(180deg);
    }
  }

  .swap-footer {
    position: absolute;
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%);
    width: 310px;

    p {
      text-align: center;
      font-size: 0.75rem;
      line-height: 140%;
      color: ${color.BLUE};
    }
  }
`;

export const SwapReviewBtn = styled.button<{ isActive: boolean }>`
  width: 100%;
  border-radius: 100px;
  height: 39px;
  background-color: ${props =>
    props.isActive ? `${color.BLUE}` : '#037dd680'};
  color: ${color.WHITE};
  margin-bottom: 32px;
`;
