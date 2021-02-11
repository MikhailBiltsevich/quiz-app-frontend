import React from 'react';

interface IProps {
  id: string
  label: string
  type: string
  onChange: (event: any) => void
  error?: {
    title: string
    description: string
  }
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
            onChange={this.props.onChange} />

        </div>

        {this.props.error &&
          <div className='card error'>
            <h3>{this.props.error.title}</h3>
            <p>{this.props.error.description}</p>
          </div>
        }
      </div>
    );
  }
}

export default InputComponent;