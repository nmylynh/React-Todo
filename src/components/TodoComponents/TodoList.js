// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

const TodoList = function(props) {

//map task, assign index to added tasks

	return (	

	<ul>
    	{
     	 props.items.map(function(item, index) {
      		return <li key={index}>{item}</li>
       		 }
    	};
 	</ul>



	)


}

export default TodoList;