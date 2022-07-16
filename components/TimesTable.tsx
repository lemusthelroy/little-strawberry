import clsx from "clsx";

const TimesTable = ({
  number,
  onClick,
  selected,
}: {
  number: number;
  onClick: (number: number) => void;
  selected: boolean;
}) => (
  <div
    onClick={() => onClick(number)}
    className={clsx(
      "flex justify-center text-xl sm:text-5xl font-bold text-white items-center p-2 rounded sm:h-28 sm:w-28 w-10 h-10",
      selected ? "bg-purple-500" : "bg-purple-400"
    )}
  >
    {number}
  </div>
);

export default TimesTable;
