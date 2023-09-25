import { InputHTMLAttributes } from "react";
import {
  RegisterOptions,
  UseFormRegister,
  FieldValues,
  Path,
  FieldErrors,
} from "react-hook-form";
import "./Input.scss";

interface Props<T extends FieldValues>
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  Registration: UseFormRegister<T>;
  options: RegisterOptions;
  name: Path<T>;
  errors?: FieldErrors;
}

function Input<T extends FieldValues>({
  type,
  placeholder,
  label,
  name,
  id,
  Registration,
  options,
  errors,
}: Props<T>) {
  return (
    <>
      <label htmlFor={name}>
        <b>{label}</b>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        id={id || name}
        {...Registration(name, options)}
      />

      {errors?.[name] && (
        <div className="error-message">
          <span className="error-text">{errors[name]?.message as string}</span>
        </div>
      )}
    </>
  );
}

export default Input;
