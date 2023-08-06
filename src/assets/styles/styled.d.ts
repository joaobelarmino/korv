import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
			dark: {
				black: string
			},
            white: {
                default: string,
            },
            primary: {
				dark: string,
                main: string,
                medium: string,
                light: string,
                lighter: string,
            },
            green: {
				darker: string,
                main: string,
				medium: string,
				light: string,
                lighter: string,
				background: string
            },
            danger: {
                darker: string,
                main: string,
				medium: string,
                light: string,
				lighter: string,
				background: string
            },
            gray: {
				darker: string,
				dark: string,
				medium: string,
				light: string,
				lighter: string,
            },
        }
    }
}
