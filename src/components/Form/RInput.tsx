import { useFormContext } from "react-hook-form";

type TRInputProps = {
  type: string;
  name: string;
  label: string;
};

const RInput = ({ type, name, label }: TRInputProps) => {
  const { register } = useFormContext();

  return (
    <div className="mt-5">
      <h1 className="block">{label && label}</h1>
      <input
        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
        type={type}
        {...register(name)}
      />
    </div>
  );
};

export default RInput;
