import React from 'react';

interface IProps {
  id: string
  label: string
  type: string
  handler: (event: any) => void
}

class InputComponent extends React.Component<IProps> {
  render() {
    return (
      <div className='input-group vertical'>
        <label htmlFor={this.props.id}>
          {this.props.label}
        </label>
        <input
          type={this.props.type}
          id={this.props.id}
          placeholder={this.props.label}
          onChange={this.props.handler} />
      </div>
    );
  }
}

export default InputComponent;