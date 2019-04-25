import React from 'react';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  constructor(props) {
    super(props); //so that app can use react.components
    this.state = { //App.state property
      task:'', //input
      tasks: [], //stores input
      id: Date.now()
    }
    //binding event handlers to avoid global pointers
    this.handleChanges = this.handleChanges.bind(this);
    this.addTask = this.addTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }
  
    handleChanges(event){ //handle input
        this.setState({ 
            task: event.target.value 
        })
    }


    addTask = (event) => {
     event.preventDefault();
        let { task, tasks } = this.state; // pull object literal property values, give them a state
        this.setState({ //setting state to:
            task: '', //input
            tasks: [...tasks, task] //taking previous array, adding task to the array
        });
    }


    removeTask(index){
        let { tasks } = this.state; //pull task, given a state
        tasks.splice(index, 1); //task will be removed by it's index, by 1 element
        this.setState({
            tasks: tasks //update state, can also be this.setState({tasks})
        }) 
    }

 render(){ //must use render in order to use return
        let { task, tasks } = this.state; //pull, give a state

        return (
          <div className="listStyle">
          <form>
            <input value={task} onChange={this.handleChanges}/> {/*onChange is an input event handler, everytime there is an event, like a keystroke, react will call this callback function, passing in the event */}
            <button onClick={this.addTask}>Add task</button>
            <button onClick={this.addTask}>Remove task</button>
          </form>
          <TodoList tasks={this.state.tasks} />
          </div>
        )
    }
}

export default App;
