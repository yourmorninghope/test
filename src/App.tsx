import { MouseEvent, useCallback, useState } from "react";
import styles from "./App.module.scss";

import { Checkbox } from "./components/Checkbox/Checkbox";
import { useQuery } from "@tanstack/react-query";
import { Button } from "./components/Button/Button";
import { Results } from "./components/Results/Results";
import { fetchData } from "./utils/api";
import { transformCatResponse } from "./utils/transformers";

function App() {
  const [enabled, setEnabled] = useState(false);
  const [autofetch, setAutofetch] = useState(false);

  const { data, isError, refetch, isFetching, isFetched } = useQuery({
    queryKey: ["cat"],
    queryFn: fetchData,
    enabled: autofetch && enabled,
    select: transformCatResponse,
    ...(autofetch && { refetchInterval: 5000 }),
  });

  const handleClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      refetch();
    },
    [refetch]
  );

  return (
    <div className={styles.layout}>
      <div className={styles.form_container}>
        <Checkbox title="Enabled" checked={enabled} setChecked={setEnabled} />
        <Checkbox
          title="Auto-refresh every 5 seconds"
          checked={autofetch}
          setChecked={setAutofetch}
        />
        <Button onClick={handleClick} disabled={!enabled}>
          Get cat
        </Button>
      </div>

      {isFetched && (
        <Results dataUrl={data} error={isError} loading={isFetching} />
      )}
    </div>
  );
}

export default App;
