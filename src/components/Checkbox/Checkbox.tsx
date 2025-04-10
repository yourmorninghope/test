import { Dispatch, FC, memo, SetStateAction } from "react";
import styles from "./Checkbox.module.scss";

interface CheckboxProps {
  title: string;
  checked: boolean;
  setChecked: Dispatch<SetStateAction<boolean>>;
}

export const Checkbox: FC<CheckboxProps> = memo(
  ({ title, checked, setChecked }) => {
    return (
      <div className={styles.checkbox_container}>
        <label>
          <input
            type="checkbox"
            checked={checked}
            onChange={() => setChecked((prev) => !prev)}
          />
          <p>{title}</p>
        </label>
      </div>
    );
  }
);
