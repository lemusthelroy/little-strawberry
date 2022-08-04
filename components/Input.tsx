import clsx from "clsx";

const Input = ({
  type,
  className,
  name,
  id,
}: {
  type: string;
  name: string;
  id: string;
  className?: string;
}) => (
  <input
    className={clsx("mb-2 p-2 rounded", className)}
    id={id}
    type={type}
    name={name}
  />
);

export default Input;
