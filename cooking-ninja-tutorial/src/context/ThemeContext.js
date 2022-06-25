import { createContext, useReducer } from 'react'

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, color: action.payload }
    case 'CHANGE_MODE':
      return { ...state, mode: action.payload }
    default:
      return state
  }
}
export const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, {
    color: '#58249c',
    mode: 'dark',
  })

  const changeColor = (color) => {
    dispatch({ type: 'CHANGE_COLOR', payload: color }) // action object
  }

  const changeMode = (mode) => {
    dispatch({ type: 'CHANGE_MODE', payload: mode }) // action object
  }

  return (
    // when state updated, any components which consumes this context will
    // be re-evaluated and re-rendered
    <ThemeContext.Provider value={{ ...state, changeColor, changeMode }}>
      {children}
    </ThemeContext.Provider>
  )
}