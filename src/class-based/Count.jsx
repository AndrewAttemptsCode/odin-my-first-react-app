import { Component } from 'react';

class Count extends Component {
  
  render() {
    return (
      <>
        <p>
          Total tasks: {this.props.todos.length}
        </p>
      </>
    );
  }
}

export default Count;
