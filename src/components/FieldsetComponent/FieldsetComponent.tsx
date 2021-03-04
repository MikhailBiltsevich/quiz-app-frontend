interface IProps {
  children?: any,
  legendText?: string
}

const FieldsetComponent = (props: IProps) => {
  const { legendText, children } = props;

  const legendElement = legendText ? <legend>{legendText}</legend> : null;
  return (
    <fieldset>
      {legendElement}
      {children}
    </fieldset>
  );
}

export default FieldsetComponent;