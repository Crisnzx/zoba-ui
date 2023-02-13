// TODO: Filter this type to simplify the component API
export type InputProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  "onChange" | "ref"
> & {
  type?: "text" | "email" | "password" | "tel" | "number";
  label: string;
  value: string;
  error?: string;
  disableAutofill?: boolean;
  iconRight?: React.ReactNode;
  onChange?: (value: string) => void;
  mask?: string;
  disablePaste?: boolean;
  labelBackground?: string;
};
