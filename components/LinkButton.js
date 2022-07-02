import Link from "next/link";
import styled from "styled-components";
import Icon from "./Icon";

const Rect = styled.a`
  border-radius: 6px;
  padding: 6px;
  font-size: 14px;
  font-weight: 400;
  color: #000;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  :hover {
    background-color: var(--primary);
  }
`;

const LinkButton = ({ icon, href, children, ...props }) => (
  <Link href={href}>
    <Rect {...props}>
      <Icon size={20} icon={icon} /> {children}
    </Rect>
  </Link>
);

export default LinkButton;
