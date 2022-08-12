import clsx from "clsx";
import { Controller, useFormContext } from "react-hook-form";

export const RawInput = ({ id, type }: { id: string; type: string }) => (
  <input className={"mb-2 p-2 rounded"} id={id} type={type} />
);

const Input = ({
  type,
  className,
  name,
}: {
  type: string;
  name: string;
  className?: string;
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={(renderProps) => (
        <input
          className={clsx("mb-2 p-2 rounded", className)}
          id={name}
          type={type}
          onChange={renderProps.field.onChange}
        />
      )}
    ></Controller>
  );
};

export default Input;
