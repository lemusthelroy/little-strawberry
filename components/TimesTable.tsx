import clsx from "clsx";
import { useState } from "react";

const TimesTable = ({
  number,
  onClick,
}: {
  number: number;
  onClick: (number: number) => void;
}) => {
  const [selected, setSelected] = useState(false);

  return (
    <div
      onClick={() => {
        onClick(number);
        setSelected(!selected);
      }}
      className={clsx(
        "flex justify-center text-xl sm:text-5xl font-bold text-white items-center p-2 rounded sm:h-28 sm:w-28 w-10 h-10",
        selected ? "bg-purple-500" : "bg-purple-400"
      )}
    >
      {number}
    </div>
  );
};

export default TimesTable;
