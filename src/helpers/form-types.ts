export type Option = {
  label: string;
  value: string;
};

export type BooleanField = "true" | "false" | "";

export enum FieldTypes {
  STRING = "STRING",
  NUMBER = "NUMBER",
  BOOLEAN = "BOOLEAN",
}
