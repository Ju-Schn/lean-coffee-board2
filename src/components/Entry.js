import styled from 'styled-components';

export default function Entry({ created, text, author, color, onClick }) {
  return (
    <Card onClick={onClick} color={color}>
      [{created}] {text} ({author})
    </Card>
  );
}
const Card = styled.section`
  background-color: ${props => (props.color ? props.color : 'hotpink')};
  padding: 20px;
  max-width: 400px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;
