import { useLocalStorage } from "./useLocalStorage"

 const useDarkMode = (intialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage(useDarkMode, intialValue);
    return [darkMode, setDarkMode];
};

export default useDarkMode;