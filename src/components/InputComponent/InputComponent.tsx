import React from 'react';

interface IProps {
  id: string
  label: string
  type: string
  handler: (event: any) => void
  error?: string
}

class InputComponent extends React.Component<IProps> {
  render() {
    const errorStyle = this.props.error ? { borderColor: '#d32f2f' } : undefined;

    return (
      <div className="container">
        <div className='input-group vertical'>
          <label htmlFor={this.props.id}>
            {this.props.label}
          </label>

          <input style={errorStyle}
            type={this.props.type}
            id={this.props.id}
            placeholder={this.props.label}
            onChange={this.props.handler} />

        </div>

        {this.props.error &&
          <div className='card error'>
            <h3>Error</h3>
            <p>{this.props.error}</p>
          </div>
        }
      </div>
    );
  }
}

export default InputComponent;