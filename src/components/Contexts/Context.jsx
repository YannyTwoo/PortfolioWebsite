import {createContext} from 'react'

const ThemeContext = createContext({});

//creating the context here and then I'll import it to the parent component 
//will wrap the child components which need this context in the
//ThemeContext.Provider tag

// create all the states that we need to pass around in the higher order parent component
// where ThemeContext is wrapping children and pass them in the value parameter as object

// in the child component, import "useContext" and the ThemeContext we've created




export default ThemeContext;