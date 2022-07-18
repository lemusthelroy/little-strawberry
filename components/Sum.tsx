const Sum = ({ x, y }: { x: number; y: number }) => (
  <div className="flex flex-row bg-purple-500 rounded mb-2 p-2 items-center justify-center">
    <span className="flex justify-center font-bold w-10">{x}</span>
    <span>x</span>
    <span className="flex justify-center font-bold w-10">{y}</span>
  </div>
);

export default Sum;
