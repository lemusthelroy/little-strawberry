import Input from "./Input";

const IncorrectSum = ({
  x,
  y,
  answer,
}: {
  x: number;
  y: number;
  answer: number | undefined;
}) => (
  <div className="flex flex-row bg-purple-500 rounded mb-2 p-2 items-center justify-center">
    <span className="flex justify-center font-bold w-10">{x}</span>
    <span>x</span>
    <span className="flex justify-center font-bold w-10">{y}</span>
    <span className="mr-2">=</span>
    <span className="ml-4 flex justify-center font-bold w-10 text-red-400">
      {answer ?? "Skipped"}
    </span>
  </div>
);

export default IncorrectSum;
