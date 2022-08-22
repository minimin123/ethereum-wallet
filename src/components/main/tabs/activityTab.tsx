import styled from 'styled-components';
import { color } from 'styles/theme';

const ActivityTab = () => {
  return <Empty>거래가 없습니다.</Empty>;
};

export default ActivityTab;

const Empty = styled.div`
  padding-top: 24px;
  text-align: center;
  font-size: 1rem;
  color: ${color.GRAY05};
`;
