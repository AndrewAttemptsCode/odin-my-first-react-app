import { Component } from 'react';
import Count from './Count';

class ClassInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        { text: 'Just some demo tasks', editMode: false },
        { text: 'As an example', editMode: false },
      ],
      inputVal: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.toggleEditTask = this.toggleEditTask.bind(this);
    this.updateTask = this.updateTask.bind(this);
  }

  handleInputChange(e) {
    this.setState({ inputVal: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.inputVal.trim()) {
      this.setState((state) => ({
        todos: [...state.todos, { text: state.inputVal, editMode: false }],
        inputVal: '',
      }));
    }
  }

  removeTask(todo) {
    const filtered = this.state.todos.filter((task) => task.text !== todo.text);
    this.setState({ todos: filtered });
  }

  toggleEditTask(index) {
    this.setState((state) => {
      const todos = [...state.todos];
      todos[index].editMode = true;
      return { todos };
    });
  }

  updateTask(index, newText) {
    this.setState((state) => {
      const todos = [...state.todos];
      todos[index].text = newText;
      todos[index].editMode = false;
      return { todos };
    });
  }

  render() {
    return (
      <section>
        <h3>{this.props.name}</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="task-entry">Enter a task: </label>
          <input
            type="text"
            name="task-entry"
            value={this.state.inputVal}
            onChange={this.handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
        <h4>All the tasks!</h4>
        <ul>
          {this.state.todos.map((todo, index) => (
            <li key={index}>
              {todo.editMode ? (
                <>
                  <input
                    type="text"
                    defaultValue={todo.text}
                    onBlur={(e) => this.updateTask(index, e.target.value)}
                  />
                  <button onClick={() => this.updateTask(index, todo.text)}>
                    Resubmit
                  </button>
                </>
              ) : (
                <>
                  {todo.text}
                  <button onClick={() => this.removeTask(todo)}>Delete</button>
                  <button onClick={() => this.toggleEditTask(index)}>Edit</button>
                </>
              )}
            </li>
          ))}
        </ul>
        <Count todos={this.state.todos} />
      </section>
    );
  }
}

export default ClassInput;
