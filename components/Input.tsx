import clsx from "clsx";
import { Controller, useFormContext } from "react-hook-form";

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
          type={type}
          onChange={renderProps.field.onChange}
        />
      )}
    ></Controller>
  );
};

export default Input;
