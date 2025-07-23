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
  transition: all 0.2s;
  &:hover {
    background-color: var(--primary);
    box-shadow: 0 0 30px 5px var(--primary-alpha);
  }
`;

const Social = ({ icon, href }) => (
  <Circle rel="me" href={href} target="_blank">
    <Icon size={24} icon={icon} />
  </Circle>
);

export default Social;
