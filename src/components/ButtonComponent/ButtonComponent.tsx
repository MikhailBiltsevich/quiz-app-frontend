import { SyntheticEvent } from 'react';

interface IProps {
  text: string
  handlerClick: (event: SyntheticEvent) => void
  classNames?: string[]
}

export default function ButtonComponent(props: IProps) {
  const { classNames = [], handlerClick, text } = props;
  const classes = classNames.length ? classNames.join(' ') : undefined;

  return (
    <button className={classes} onClick={handlerClick}>{text}</button>
  );
}