export interface Todo {
    id: number;
    todoText: string;
    isDone: boolean;
}

export type Actions = 
 | {type: "add"; payload: string}
 | {type: "remove"; payload: number} 
 | {type: "edit"; payload: {id: number, text: string}} 
 | {type: "done"; payload: number}


export const TodosReducer = (state: Todo[], action: Actions) => {
    switch (action.type) {
        case "add":
            return [...state, {id: Date.now(), todoText: action.payload, isDone: false}];
        case "remove":
            return state.filter((todo) => todo.id !== action.payload);
        case "edit":
            return state.map((todo) => todo.id === action.payload.id ? {...todo, todoText: action.payload.text} : todo
        )
        case "done": 
            return state.map(todo =>
                todo.id === action.payload ? {...todo, isDone: !todo.isDone} : todo
            );
        default:
            return state
    }
}




