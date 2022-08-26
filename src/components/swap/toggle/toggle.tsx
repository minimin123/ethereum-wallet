import styled from 'styled-components';
import { color } from 'styles/theme';

interface IProps {
  isChecked: boolean;
}

const Toggle = ({ isChecked }: IProps) => {
  return (
    <ToggleWraper isChecked={isChecked}>
      <div className="ball" />
    </ToggleWraper>
  );
};

export default Toggle;

const ToggleWraper = styled.div<{ isChecked: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 24px;
  border-radius: 26px;
  border: 2px solid
    ${props => (props.isChecked ? `${color.BLUE}` : `rgb(106, 115, 125)`)};
  background-color: rgb(242, 244, 246);
  margin-right: 12px;
  cursor: pointer;

  .ball {
    position: absolute;
    width: 17px;
    height: 17px;
    border-radius: 50%;
    background-color: ${props =>
      props.isChecked ? `${color.BLUE}` : `rgb(106, 115, 125)`};
    margin: 0 !important;
    transform: ${props =>
      props.isChecked ? 'translateX(50%)' : 'translateX(-50%)'};
    transition: 0.2s ease-in-out;
  }
`;
