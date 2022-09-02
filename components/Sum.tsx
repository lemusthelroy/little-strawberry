import Input from "./Input";
import clsx from "clsx";

const Sum = ({
  x,
  y,
  incorrect,
}: {
  x: number;
  y: number;
  incorrect?: boolean;
}) => (
  <div className="flex flex-row bg-purple-500 rounded mb-2 p-2 items-center justify-center">
    <span className="flex justify-center font-bold w-10">{x}</span>
    <span>x</span>
    <span className="flex justify-center font-bold w-10">{y}</span>
    <span className="mr-2">=</span>
    <Input
      name={`${x}-${y}`}
      type="tel"
      className={clsx(
        "border-b-2 border-b-white w-10 rounded text-center",
        incorrect && "text-red-500"
      )}
    />
  </div>
);

export default Sum;
