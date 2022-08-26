import styled from 'styled-components';

import { color } from 'styles/theme';

export const Wrap = styled.div`
  position: absolute;
  top: 0;
  background-color: ${color.WHITE};
  z-index: 11;
  margin-top: 13px;
  margin-left: 1px;

  input {
    width: 310px;
    height: 55px;
    display: flex;
    padding: 0 16px 0 48px;
    border: none;
    background-color: ${color.WHITE};
    ::placeholder {
      fill: ${color.GRAY03};
    }
    :focus {
      border: 1px solid ${color.BLUE};
    }
  }

  .search-icon {
    position: absolute;
    top: 17px;
    left: 16px;
    fill: ${color.GRAY05};
  }

  ul {
    display: flex;
    flex-direction: column;
    width: 310px;
    max-height: 270px;
    overflow-y: auto;
    box-shadow: 0 0 14px rgb(0 0 0 / 18%);
    background-color: ${color.WHITE};

    li {
      display: flex;
      align-items: center;
      padding: 8px 12px;
      min-height: 50px;
      border-bottom: 1px solid ${color.GRAY04};
      cursor: pointer;
      :hover {
        background-color: ${color.GRAY02};
      }

      img {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        box-shadow: 0 2px 4px 0 rgb(0 0 0 / 24%);
      }

      dl {
        margin-left: 12px;

        dt {
          font-size: 0.875rem;
          font-weight: bold;
          padding-top: 4px;
          padding-bottom: 3px;
        }
        dd {
          font-size: 0.75rem;
          color: ${color.GRAY03};
          max-width: 170px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
      }
    }
  }
`;
