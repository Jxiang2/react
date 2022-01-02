import { createContext, useReducer } from "react"

const themeReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_COLOR':
            return {...state, color: action.payload}
        default:
            return state
    }
}
export const ThemeContext = createContext()

export function ThemeProvider({children}) {
    const [state, dispatch] = useReducer(themeReducer, {color: '#58249c'})

    const changeColor = (color) => {
        dispatch({type: "CHANGE_COLOR", payload: color}) // action object
    }

    return (
        // when state updated, any components which consumes this context will
        // be re-evaluated and re-rendered
        <ThemeContext.Provider value={{...state, changeColor}}>
            {children}
        </ThemeContext.Provider>
    )
}