import Link from "next/link";
import Icon from "./Icon";

const LinkButton = ({ icon, href, target, children }) => (
  <Link
    className="inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-normal text-white/80 bg-white/5 border border-white/10 transition-all duration-200 cursor-pointer hover:bg-primary hover:border-primary hover:text-white hover:shadow-[0_0_30px_5px_var(--color-primary-alpha)]"
    href={href}
    target={target}
  >
    <Icon size={12} icon={icon} /> {children}
  </Link>
);

export default LinkButton;
