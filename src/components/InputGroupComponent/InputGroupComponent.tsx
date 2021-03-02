interface IProps {
  isVertical?: boolean
  labelText?: string
  children: any
}

const InputGroupComponent = (props: IProps) => {
  const { isVertical = true, labelText, children } = props;
  const classNameString = isVertical ? 'input-group vertical' : 'input-group';
  const labelElement = labelText ? <label>{labelText}</label> : null;
  return (
    <div className={classNameString}>
      {labelElement}
      {children}
    </div>
  );
}

export default InputGroupComponent;