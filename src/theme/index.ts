import colors from './colors'

export interface ITheme {
    canvas_background: string;
    background: string;
    primary: string;
    green: string;
    red: string;
    text: string;
}

const themeLight: ITheme = {
    canvas_background: colors.light_gray,
    background: colors.white,
    primary: colors.primary,
    green: colors.green,
    red: colors.red,
    text: colors.black
}

const themeDark: ITheme = {
    canvas_background: colors.dark_gray,
    background: colors.black,
    primary: colors.primary,
    green: colors.green,
    red: colors.red,
    text: colors.white
}

const themes = {
    themeDark,
    themeLight
}

export default themes;