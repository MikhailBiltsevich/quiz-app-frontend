import { SyntheticEvent } from 'react';

interface IProps {
  text: string
  onClick: (event: SyntheticEvent) => void
  classNames?: string[]
}

export default function ButtonComponent(props: IProps) {
  const { classNames = [], onClick, text } = props;
  const classes = classNames.length ? classNames.join(' ') : undefined;

  return (
    <button className={classes} onClick={onClick}>{text}</button>
  );
}