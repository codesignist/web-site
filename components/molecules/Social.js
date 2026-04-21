import Icon from "../atoms/Icon";

const Social = ({ icon, href }) => (
  <a
    className="w-12 h-12 rounded-full flex items-center justify-center bg-white/5 border border-white/10 text-white/80 cursor-pointer transition-all duration-200 hover:bg-primary hover:border-primary hover:text-white hover:-translate-y-0.5 hover:shadow-[0_0_30px_5px_var(--color-primary-alpha)]"
    rel="me"
    href={href}
    target="_blank"
  >
    <Icon size={22} icon={icon} />
  </a>
);

export default Social;
