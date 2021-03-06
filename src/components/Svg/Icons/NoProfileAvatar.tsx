import React from "react";
import { useTheme } from "styled-components";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  const primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
  const secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";

  return (
    <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M16 0.00100708C7.16437 0.00100708 0 7.16397 0 16.0003C0 24.8366 7.16367 31.9996 16 31.9996C24.837 31.9996 32 24.8366 32 16.0003C32 7.16397 24.837 0.00100708 16 0.00100708ZM16 4.78498C18.9237 4.78498 21.2928 7.15483 21.2928 10.0771C21.2928 13 18.9237 15.3692 16 15.3692C13.0777 15.3692 10.7086 13 10.7086 10.0771C10.7086 7.15483 13.0777 4.78498 16 4.78498ZM15.9965 27.8165C13.0806 27.8165 10.4099 26.7546 8.35 24.9969C7.84819 24.5689 7.55864 23.9413 7.55864 23.2827C7.55864 20.319 9.9573 17.9471 12.9217 17.9471H19.0797C22.0448 17.9471 24.4343 20.319 24.4343 23.2827C24.4343 23.942 24.1462 24.5682 23.6437 24.9962C21.5845 26.7546 18.9131 27.8165 15.9965 27.8165Z" fill="#FCD419"/>

    </Svg>
  );
};

export default Icon;
