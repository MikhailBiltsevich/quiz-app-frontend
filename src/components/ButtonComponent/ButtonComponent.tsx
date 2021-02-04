import { SyntheticEvent } from 'react';

interface IProps {
  text: string
  handlerClick: (event: SyntheticEvent) => void
}

export default function ButtonComponent(props: IProps) {
  return (
    <button onClick={props.handlerClick}>{props.text}</button>
  );
}