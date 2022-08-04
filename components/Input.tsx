import clsx from "clsx";

const Input = ({
  type,
  className,
  name,
}: {
  type: string;
  name: string;
  className?: string;
}) => (
  <input
    className={clsx("mb-2 p-2 rounded", className)}
    type={type}
    name={name}
  />
);

export default Input;
