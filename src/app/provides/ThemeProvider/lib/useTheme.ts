import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";
import {useContext} from "react";

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}
export function useTheme():UseThemeResult {
    const {theme, setTheme} = useContext(ThemeContext)

    const toggleTheme = () => {
        const nevTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        setTheme(nevTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, nevTheme)
    }

    return {
        theme,
        toggleTheme
    }
}