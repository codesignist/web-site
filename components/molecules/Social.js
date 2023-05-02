import styled from "styled-components";
import Icon from "../atoms/Icon";

const Circle = styled.a`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: background-color 0.2s;
  :hover {
    width: 52px;
    height: 52px;
    margin: -2px;
    background-color: var(--primary);
  }
`;

const Social = ({ icon, href }) => (
  <Circle href={href} target="_blank">
    <Icon size={24} icon={icon} />
  </Circle>
);

export default Social;
