import styled from 'styled-components';
import { color } from 'styles/theme';

export const Wrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  .slippage-option {
    display: flex;
    align-items: center;
    width: 310px;
    height: 25px;
    font-size: 0.875rem;
    margin-top: 8px;
    font-weight: 900;

    .icon-wrapper {
      margin-left: 4px;
      position: relative;
      :hover {
        .tooltip {
          display: block;
        }
      }
      svg {
        width: 12px;
        fill: rgb(106, 115, 125);
      }
    }

    .tooltip {
      display: none;
      position: absolute;
      bottom: 25px;
      left: -98px;
      width: 200px;
      background-color: ${color.WHITE};
      border-radius: 6px;
      padding: 10px 16px;
      color: ${color.GRAY03};
      font-size: 12px;
      line-height: 140%;
      font-weight: 400;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 20px;
      animation: fadein 0.3s ease-in-out;
      @keyframes fadein {
        0% {
          transform: translateY(5px);
        }
        100% {
          transform: none;
        }
      }

      ::after {
        position: absolute;
        bottom: -8px;
        left: 50%;
        transform: translateX(-50%);
        content: '';
        border-top: 8px solid ${color.WHITE};
        border-left: 7px solid transparent;
        border-right: 7px solid transparent;
      }
    }

    input[type='radio'] {
      display: none;
      &:checked + .option-btn {
        color: ${color.WHITE};
        background-color: ${color.BLUE};
        border: none;
      }
    }

    .option-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.75rem;
      color: ${color.GRAY03};
      border: 1px solid ${color.GRAY04};
      background: ${color.WHITE};
      border-radius: 25px;
      height: 25px;
      margin-left: 8px;
      min-width: 48px;
      padding-top: 3px;
      font-weight: 500;
      :hover {
        cursor: pointer;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 12px;
        transition: ease-in-out 0.2s;
      }
    }

    .user {
      position: relative;
      min-width: 72px;
      overflow: hidden;

      span {
        position: absolute;
        top: 50%;
        right: 8px;
        transform: translateY(-50%);
        padding-top: 4px;
        color: ${color.WHITE};
      }
    }

    .toggle {
      display: flex;
      align-items: center;
      margin-left: 12px;
      font-weight: 400;

      input[type='checkbox'] {
        display: none;
      }
    }
  }

  .warning {
    font-size: 0.75rem;
    line-height: 140%;
    color: #d73a49;
    width: 310px;
    padding-top: 8px;
  }
`;

export const Input = styled.input<{ color: string }>`
  position: absolute;
  top: 0;
  width: 72px;
  text-align: center;
  height: 25px;
  border: none;
  color: ${color.WHITE};
  background-color: ${props =>
    props.color === 'blue' ? `${color.BLUE}` : '#d73a49'};
  -moz-appearance: textfield;
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
