import {classNames} from "shared/lib/classNames/classNames";
import {Theme, useTheme} from "app/provides/ThemeProvider";
import LightIcon from 'shared/assets/icons/sun-day.svg';
import DarkIcon from 'shared/assets/icons/moon_icon.svg';
import {Button, ThemeButton} from "shared/ui/Button/Button";
import React from "react";

interface ThemeSwitcherProps {
    className?: string;
}
export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK ? <LightIcon /> : <DarkIcon />}
        </Button>
    );
};
