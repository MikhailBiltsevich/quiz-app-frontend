import { SyntheticEvent } from 'react';

interface IProps {
  text: string
  onClick: (event: SyntheticEvent) => void
  classNames?: string[]
  id?: number
  isDisabled?: boolean
}

const ButtonComponent = (props: IProps) => {
  const { classNames = [], onClick, text, id, isDisabled = false } = props;
  const classes = classNames.length ? classNames.join(' ') : undefined;

  return (
    <button data-id={id} className={classes} onClick={onClick} disabled={isDisabled}>{text}</button>
  );
}

export default ButtonComponent;