import {createContext , useContext ,useEffect,useState} from 'react'

const ThemeContext = createContext();

export const useTheme=()=>{
    return useContext(ThemeContext);
};

export const Themeprovider = ({children})=>{
    const [isDarkMode , setDarkMode] = useState(false);


    const toggleTheme =()=>{
        setDarkMode ((prevState)=> !prevState)
    };

    const theme = isDarkMode ? "dark":"light"; 

    useEffect(()=>{
     document.documentElement.setAttribute("data-theme" , theme);
 
    },[isDarkMode]);

    return <ThemeContext.Provider value={{theme, toggleTheme}}>{children}</ThemeContext.Provider>
}