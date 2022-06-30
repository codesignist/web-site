import styled from "styled-components";
import Icon from "./Icon";

const Circle = styled.a`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary);
  cursor: pointer;
  :hover {
    width: 52px;
    height: 52px;
    margin: -2px;
  }
`;

const Social = ({ icon, href }) => (
  <Circle href={href} target="_blank">
    <Icon size={24} icon={icon} />
  </Circle>
);

export default Social;
