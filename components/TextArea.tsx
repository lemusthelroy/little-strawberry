import clsx from "clsx";

const TextArea = ({
  name,
  className,
  id,
}: {
  name: string;
  id: string;
  className?: string;
}) => (
  <textarea
    className={clsx("mb-2 p-2 rounded", className)}
    name={name}
    id={id}
  />
);

export default TextArea;
