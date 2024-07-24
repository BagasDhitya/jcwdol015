import { useMemo } from "react";

function LongTaskCount({ tasks }) {
  const longTasks = useMemo(() => {
    return tasks?.filter((tasks) => tasks.length > 5);
  }, [tasks]);

  return (
    <div className="font-bold text-black p-3">
      Number of long tasks : {longTasks.length}
    </div>
  );
}

export default LongTaskCount;
