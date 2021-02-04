import { SyntheticEvent } from 'react';

interface IProps {
  text: string
  handlerClick: (event: SyntheticEvent) => void
  classNames?: string[]
}

export default function ButtonComponent(props: IProps) {
  return (
    props.classNames
      ? <button className={props.classNames.join(' ')} onClick={props.handlerClick}>{props.text}</button>
      : <button onClick={props.handlerClick}>{props.text}</button>
  );
}