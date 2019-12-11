import React, { useReducer } from 'react';
import { reducer} from '../reducers/reducer';
import Todo from './Todo';
import { initialState } from '../reducers/reducer';

const TodoList = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    console.log(state)

    return (
        <div>
            {state.todo.map(todo => (
                <Todo
                    dispatch={() => {
                        dispatch({
                            type:"FINISHED_TODO"
                        })
                    }}
                    item={todo.item}
                    key={todo.key}
                    id={todo.id} 
                    completed={todo.complete}/>
            ))}

        </div>
    )
}

export default TodoList;