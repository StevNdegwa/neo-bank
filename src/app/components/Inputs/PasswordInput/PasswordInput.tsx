import { UseFormRegisterReturn } from "react-hook-form";

export type PasswordInputProps = {
  name: string;
  register: UseFormRegisterReturn;
  label?: string;
  placeholder?: string;
  className?: string;
};

const PasswordInput: React.FC<PasswordInputProps> = ({
  name,
  label,
  placeholder,
  className,
  register,
}) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        { ...register }
        type="password"
        className={`${className} auth`}
        placeholder={placeholder}
        aria-label={label}
      />
    </>
  );
};

export default PasswordInput;
