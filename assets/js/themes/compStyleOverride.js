import * as React from 'react';

export default function componentStyleOverrides(theme) {
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

    const bgColor = grey50;
    return {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontWeight: 500,
                    borderRadius: '4px'
                }
            }
        },
        MuiPaper: {
            defaultProps: {
                elevation: 0
            },
            styleOverrides: {
                root: {
                    backgroundImage: 'none'
                },
                rounded: {
                    borderRadius: `${theme?.customization?.borderRadius}px`
                }
            }
        },
        MuiCardHeader: {
            styleOverrides: {
                root: {
                    color: "black",
                    padding: '24px'
                },
                title: {
                    fontSize: '1.125rem'
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    padding: '24px'
                }
            }
        },
        MuiCardActions: {
            styleOverrides: {
                root: {
                    padding: '24px'
                }
            }
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    color: theme.darkTextPrimary,
                    paddingTop: '10px',
                    paddingBottom: '10px',
                    '&.Mui-selected': {
                        color: theme.menuSelected,
                        backgroundColor: theme.menuSelectedBack,
                        '&:hover': {
                            backgroundColor: theme.menuSelectedBack
                        },
                        '& .MuiListItemIcon-root': {
                            color: theme.menuSelected
                        }
                    },
                    '&:hover': {
                        backgroundColor: theme.menuSelectedBack,
                        color: theme.menuSelected,
                        '& .MuiListItemIcon-root': {
                            color: theme.menuSelected
                        }
                    }
                }
            }
        },
        MuiListItemIcon: {
            styleOverrides: {
                root: {
                    color: theme.darkTextPrimary,
                    minWidth: '36px'
                }
            }
        },
        MuiListItemText: {
            styleOverrides: {
                primary: {
                    color: theme.textDark
                }
            }
        },
        MuiInputBase: {
            styleOverrides: {
                input: {
                    color: theme.textDark,
                    '&::placeholder': {
                        color: theme.darkTextSecondary,
                        fontSize: '0.875rem'
                    }
                }
            }
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    background: bgColor,
                    borderRadius: `${theme?.customization?.borderRadius}px`,
                    '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: grey300
                    },
                    '&:hover $notchedOutline': {
                        borderColor: primaryLight
                    },
                    '&.MuiInputBase-multiline': {
                        padding: 1
                    }
                },
                input: {
                    fontWeight: 500,
                    background: "white",
                    padding: '15.5px 14px',
                    borderRadius: `${theme?.customization?.borderRadius}px`,
                    '&.MuiInputBase-inputSizeSmall': {
                        padding: '10px 14px',
                        '&.MuiInputBase-inputAdornedStart': {
                            paddingLeft: 0
                        }
                    }
                },
                inputAdornedStart: {
                    paddingLeft: 4
                },
                notchedOutline: {
                    borderRadius: `${theme?.customization?.borderRadius}px`
                }
            }
        },
        MuiSlider: {
            styleOverrides: {
                root: {
                    '&.Mui-disabled': {
                        color: grey300
                    }
                },
                mark: {
                    backgroundColor: theme.paper,
                    width: '4px'
                },
                valueLabel: {
                    color: theme?.colors?.primaryLight
                }
            }
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    borderColor: theme.divider,
                    opacity: 1
                }
            }
        },
        MuiAvatar: {
            styleOverrides: {
                root: {
                    color: primaryDark,
                    background: primary200
                }
            }
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    '&.MuiChip-deletable .MuiChip-deleteIcon': {
                        color: 'inherit'
                    }
                }
            }
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    color: theme.paper,
                    background: grey700
                }
            }
        }
    };
}
