import Link from "next/link";
import styled from "styled-components";
import Icon from "./Icon";

const RLink = styled(Link)`
  border-radius: 6px;
  padding: 6px;
  font-size: 14px;
  font-weight: 400;
  color: #000;
  background-color: rgba(255, 255, 255, 0.3);
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    background-color: var(--primary);
    box-shadow: 0 0 30px 5px var(--primary-alpha);
  }
`;

const LinkButton = ({ icon, href, target, children, ...props }) => (
  <RLink href={href} target={target}>
    <Icon size={12} icon={icon} /> {children}
  </RLink>
);

export default LinkButton;
