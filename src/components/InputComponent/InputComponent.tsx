interface IProps {
  id: string
  label: string
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
      <div className='input-group vertical'>
        <label htmlFor={props.id}>
          {props.label}
        </label>

        <input style={errorStyle}
          type={props.type}
          id={props.id}
          placeholder={props.label}
          onChange={props.onChange}
          value={value} />

      </div>

      {props.error &&
        <div className='card error'>
          <h3>{props.error.title}</h3>
          <p>{props.error.description}</p>
        </div>
      }
    </>
  );
}

export default InputComponent;