import React from 'react';

interface IProps {
  id: string
  label: string
  type: string
  handler: (event: any) => void
  error?: {
    title: string
    description: string
  }
}

const InputComponent = (props: IProps) => {
  const errorStyle = props.error ? { borderColor: '#d32f2f' } : undefined;

  return (
    <div className="container">
      <div className='input-group vertical'>
        <label htmlFor={props.id}>
          {props.label}
        </label>

        <input style={errorStyle}
          type={props.type}
          id={props.id}
          placeholder={props.label}
          onChange={props.handler} />

      </div>

      {props.error &&
        <div className='card error'>
          <h3>{props.error.title}</h3>
          <p>{props.error.description}</p>
        </div>
      }
    </div>
  );
}

export default InputComponent;