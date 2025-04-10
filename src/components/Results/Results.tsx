import { FC, memo } from "react";
import { CatPreview } from "../CatPreview/CatPreview";

import styles from "./Results.module.scss";

interface ResultsProps {
  dataUrl: string | undefined;
  loading: boolean;
  error: boolean;
}

export const Results: FC<ResultsProps> = memo(({ dataUrl, error, loading }) => {
  if (loading) {
    return (
      <div className={styles.results_container}>
        <p>Loading...</p>
      </div>
    );
  }

  if (error || !dataUrl) {
    return (
      <div className={styles.results_container}>
        <p>Some error occured :(</p>
      </div>
    );
  }

  return <CatPreview src={dataUrl} />;
});
