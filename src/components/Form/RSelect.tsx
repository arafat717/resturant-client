import { useFormContext } from "react-hook-form";

type TOptions = {
  label: string;
  value: string;
};

type TRInputProps = {
  label: string;
  name: string;
  options: TOptions[];
};

const RSelect = ({ name, options, label }: TRInputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="mb-4">
      <h1 className="block">{label && label}</h1>
      <select
        className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...register(name)}
      >
        <option value="">Select a category</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {errors[name] && (
        <p className="text-sm text-red-500 mt-1">{label} is required</p>
      )}
    </div>
  );
};

export default RSelect;
