import { ArrowIcon, LogoETH } from 'assets';
import styled from 'styled-components';
import { color } from 'styles/theme';

const AssetTab = () => {
  return (
    <Wrap>
      <ul>
        <li>
          <LogoETH className="logo-eth" />
          <div>
            <span>0 ETH</span>
            <span>$0.00 USD</span>
          </div>
          <ArrowIcon className="arrow" />
        </li>
      </ul>
    </Wrap>
  );
};

export default AssetTab;

const Wrap = styled.div`
  ul {
    li {
      position: relative;
      display: flex;
      align-items: center;
      width: 100%;
      min-height: 86px;
      padding: 24px 16px;
      font-size: 1rem;
      line-height: 140%;
      border-top: 1px solid ${color.GRAY04};
      border-bottom: 1px solid ${color.GRAY04};
      :hover {
        background-color: ${color.GRAY02};
        cursor: pointer;
      }

      .logo-eth {
        height: 32px;
        width: 32px;
        border-radius: 16px;
        border: 1px solid ${color.GRAY01};
        margin-right: 16px;
        background-color: ${color.WHITE};
      }

      span {
        :nth-child(2) {
          font-size: 0.875rem;
          line-height: 140%;
          margin-top: 6px;
          color: ${color.GRAY03};
        }
      }

      div {
        display: flex;
        flex-direction: column;
      }

      .arrow {
        position: absolute;
        top: 50%;
        right: 16px;
        transform: translateY(-50%) rotate(180deg);
      }
    }
  }
`;
