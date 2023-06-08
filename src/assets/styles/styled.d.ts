import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            white: {
                background: string,
                bluish: string,
            },
            primary: {
                lighter: string,
                main: string,
                dark: string,
            },
            green: {
                main: string,
                secondary: string,
                lighter: string,
            },
            danger: {
                light: string,
                main: string,
                darker: string,
            },
            gray: {
                main: string
            },
        }
    }
}
