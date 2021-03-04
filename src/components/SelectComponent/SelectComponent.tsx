import { SyntheticEvent } from "react";

interface IProps {
  options: { key: string, value: string }[]
  value?: string
  onChange: (event: SyntheticEvent) => void
}

const SelectComponent = (props: IProps) => (
  <select value={props.value} onChange={props.onChange}>
    {props.options.map((item) => (
      <option key={item.key} value={item.key}>{item.value}</option>
    ))}
  </select>
);

export default SelectComponent;