import Link from "next/link";
import Icon from "./Icon";

const LinkButton = ({ icon, href, target, children }) => (
  <Link
    className="rounded-md p-1.5 text-sm font-normal text-black bg-white/30 transition-all duration-200 cursor-pointer hover:bg-primary hover:shadow-[0_0_30px_5px_var(--color-primary-alpha)]"
    href={href}
    target={target}
  >
    <Icon size={12} icon={icon} /> {children}
  </Link>
);

export default LinkButton;
