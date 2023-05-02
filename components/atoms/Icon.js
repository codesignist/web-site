import IcomoonReact from "icomoon-react";
import iconSet from "../../utils/selection.json";

const Icon = ({ color, size = "100%", icon, className = "" }) => (
  <IcomoonReact
    className={className}
    iconSet={iconSet}
    color={color}
    size={size}
    icon={icon}
  />
);

export default Icon;
