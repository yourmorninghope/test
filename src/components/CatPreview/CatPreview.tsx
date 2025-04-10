import { ComponentProps, FC } from "react";
import styles from "./CatPreview.module.scss";
import { clsx } from "clsx";

interface CatPreviewProps extends ComponentProps<"img"> {
  className?: string;
}

export const CatPreview: FC<CatPreviewProps> = ({ className, ...rest }) => {
  return (
    <div className={clsx(className, styles.image_container)}>
      <img {...rest} />
    </div>
  );
};
