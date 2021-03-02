interface IProps {
  id: string
  placeholder: string
  type: string
  value?: string
  onChange: (event: any) => void
  error?: {
    title: string
    description: string
  }
}

const InputComponent = (props: IProps) => {
  const errorStyle = props.error ? { borderColor: '#d32f2f' } : undefined;
  const { value = '' } = props;

  return (
    <>
      <input style={errorStyle}
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={value} />

      {props.error &&
        <div className="row">
          <div className="col-sm">
            <div className='card fluid error'>
              <h3>{props.error.title}</h3>
              <p>{props.error.description}</p>
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default InputComponent;