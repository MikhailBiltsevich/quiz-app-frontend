interface IProps {
  children: any,
  classNames?: string[]
}

const CardComponent = (props: IProps) => {
  const { classNames, children } = props;
  const defaultClassNames = 'card';
  const classNameString = classNames
    ? classNames.join(' ') + ' ' + defaultClassNames
    : defaultClassNames;

  return (
    <div className={classNameString}>
      {children}
    </div>
  )
}

export default CardComponent;