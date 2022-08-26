import styled from 'styled-components';
import { color } from 'styles/theme';

export const ContentsHeader = styled.section`
  position: relative;
  display: flex;
  width: 100%;
  column-gap: 5px;
  padding: 0 8px;
  height: 64px;
  border-bottom: 1px solid ${color.GRAY04};

  .selected-account {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 40%;
    margin: 4px auto;
    padding: 6px 1px;
    border-radius: 10px;
    background-color: transparent;
    transition: ease-in-out 0.2s;

    :hover {
      background-color: ${color.GRAY02};
      transition: ease-in-out 0.2s;
      .tooltip {
        display: block;
      }
    }

    span {
      font-size: 1rem;
    }
    abbr {
      display: flex;
      align-items: center;
      font-size: 0.75rem;
      color: ${color.GRAY03};

      .copy-icon {
        margin-left: 3px;
      }
    }

    .tooltip {
      display: none;
      position: absolute;
      bottom: -40px;
      background-color: ${color.WHITE};
      border-radius: 6px;
      padding: 10px 16px;
      color: ${color.GRAY03};
      font-size: 12px;
      box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 20px;
      animation: fadein 0.3s ease-in-out;
      @keyframes fadein {
        0% {
          transform: translateY(-10px);
        }
        100% {
          transform: none;
        }
      }

      ::after {
        position: absolute;
        top: -8px;
        left: 50%;
        transform: translateX(-50%);
        content: '';
        border-bottom: 8px solid ${color.WHITE};
        border-left: 7px solid transparent;
        border-right: 7px solid transparent;
      }
    }
  }

  .button-wrapper {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
  }
  .menu-button {
    position: relative;

    .menu {
      width: 19px;
    }

    .toggle-menu {
      position: absolute;
      top: 20px;
      right: 0;
      width: 225px;
      background-color: ${color.WHITE};
      box-shadow: 0 2px 10px rgb(0 0 0 / 21%);
      border-radius: 8px;
      overflow: hidden;

      li {
        display: flex;
        align-items: center;
        font-size: 0.875rem;
        height: 46px;
        padding: 14px 16px;
        text-align: left;
        cursor: pointer;
        :hover {
          background-color: ${color.GRAY02};
        }

        svg {
          width: 13px;
          margin-right: 8px;
          fill: ${color.GRAY03};
        }
      }
    }
  }
`;
