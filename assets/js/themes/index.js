import * as React from 'react';

import { createTheme } from '@mui/material/styles';

// assets
// project imports
// paper & background
const paper  =  "#ffffff"


// primary
const primaryLight  =  "#e3f2fd"

const primaryMain  =  "#2196f3"

const primaryDark  =  "#1e88e5"

const primary200  =  "#90caf9"

const primary800  =  "#1565c0"


// secondary
const secondaryLight  =  "#ede7f6"

const secondaryMain  =  "#673ab7"

const secondaryDark  =  "#5e35b1"

const secondary200  =  "#b39ddb"

const secondary800  =  "#4527a0"


// success Colors
const successLight  =  "#b9f6ca"

const success200  =  "#69f0ae"

const successMain  =  "#00e676"

const successDark  =  "#00c853"


// error
const errorLight  =  "#ef9a9a"

const errorMain  =  "#f44336"

const errorDark  =  "#c62828"


// orange
const orangeLight  =  "#fbe9e7"

const orangeMain  =  "#ffab91"

const orangeDark  =  "#d84315"


// warning
const warningLight  =  "#fff8e1"

const warningMain  =  "#ffe57f"

const warningDark  =  "#ffc107"


// grey
const grey50  =  "#fafafa"

const grey100  =  "#f5f5f5"

const grey200  =  "#eeeeee"

const grey300  =  "#e0e0e0"

const grey500  =  "#9e9e9e"

const grey600  =  "#757575"

const grey700  =  "#616161"

const grey900  =  "#212121"


// ==============================|| DARK THEME VARIANTS ||============================== //

// paper & background
const darkBackground  =  "#1a223f"
// level 3
const darkPaper  =  "#111936"
// level 4

// dark 800 & 900
const darkLevel1  =  "#29314f"
// level 1
const darkLevel2  =  "#212946"
// level 2

// primary dark
const darkPrimaryLight  =  "#e3f2fd"

const darkPrimaryMain  =  "#2196f3"

const darkPrimaryDark  =  "#1e88e5"

const darkPrimary200  =  "#90caf9"

const darkPrimary800  =  "#1565c0"


// secondary dark
const darkSecondaryLight  =  "#d1c4e9"

const darkSecondaryMain  =  "#7c4dff"

const darkSecondaryDark  =  "#651fff"

const darkSecondary200  =  "#b39ddb"

const darkSecondary800  =  "#6200ea"


// text variants
const darkTextTitle  =  "#d7dcec"

const darkTextPrimary  =  "#bdc8f0"

const darkTextSecondary  =  "#8492c4"
import componentStyleOverrides from './compStyleOverride';
import themePalette from './palette';
import themeTypography from './typography';

/**
 * Represent theme style and structure as per Material-UI
 * @param {JsonObject} customization customization parameter object
 */

export const theme = (customization) => {

    const themeOption = {
        heading:grey900,
        paper: paper,
        backgroundDefault: paper,
        background: primaryLight,
        darkTextPrimary: grey700,
        darkTextSecondary: grey500,
        textDark: grey900,
        menuSelected: secondaryDark,
        menuSelectedBack: secondaryLight,
        divider: grey200,
        customization
    };

    const themeOptions = {
        direction: 'ltr',
        palette: themePalette(themeOption),
        mixins: {
            toolbar: {
                minHeight: '48px',
                padding: '16px',
                '@media (min-width: 600px)': {
                    minHeight: '48px'
                }
            }
        },
        typography: themeTypography(themeOption)
    };

    const themes = createTheme(themeOptions);
    themes.components = componentStyleOverrides(themeOption);

    return themes;
};

export default theme;
