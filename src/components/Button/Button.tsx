import { FC, ReactNode, ComponentProps } from "react";
import styles from "./Button.module.scss";
import { clsx } from "clsx";

interface ButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
  className?: string;
}

export const Button: FC<ButtonProps> = ({ children, className, ...rest }) => {
  return (
    <div className={clsx(styles.button_container, className)}>
      <button {...rest}>{children}</button>
    </div>
  );
};
