"use strict";
var __assign = (this && this.__assign) || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.brandingDarkTheme = exports.getThemedComponents = exports.getDesignTokens = exports.getMetaThemeColor = exports.blueDark = exports.blue = void 0;
var utils_1 = require("@mui/utils");
var ArrowDropDownRounded_1 = require("@mui/icons-material/ArrowDropDownRounded");
var styles_1 = require("@mui/material/styles");
var defaultTheme = (0, styles_1.createTheme)();
exports.blue = {
  50: '#F0F7FF',
  100: '#C2E0FF',
  200: '#99CCF3',
  300: '#66B2FF',
  400: '#3399FF',
  main: '#007FFF',
  500: '#007FFF',
  600: '#0072E5',
  700: '#0059B2',
  800: '#004C99',
  900: '#003A75',
};
exports.blueDark = {
  50: '#E2EDF8',
  100: '#CEE0F3',
  200: '#91B9E3',
  300: '#5090D3',
  main: '#5090D3',
  400: '#265D97',
  500: '#1E4976',
  600: '#173A5E',
  700: '#132F4C',
  800: '#001E3C',
  900: '#0A1929',
};
var grey = {
  50: '#F3F6F9',
  100: '#E7EBF0',
  200: '#E0E3E7',
  300: '#CDD2D7',
  400: '#B2BAC2',
  500: '#A0AAB4',
  600: '#6F7E8C',
  700: '#3E5060',
  800: '#2D3843',
  900: '#1A2027',
};
// context on the Advanced Perceptual Contrast Algorithm (APCA) used above here: https://github.com/w3c/wcag/issues/695
var systemFont = [
  '-apple-system',
  'BlinkMacSystemFont',
  '"Segoe UI"',
  'Roboto',
  '"Helvetica Neue"',
  'Arial',
  'sans-serif',
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
];
var getMetaThemeColor = function (mode) {
  var themeColor = {
    light: grey[50],
    dark: exports.blueDark[800],
  };
  return themeColor[mode];
};
exports.getMetaThemeColor = getMetaThemeColor;
var getDesignTokens = function (mode) {
  return ({
    palette: __assign(__assign(__assign(__assign(__assign({
      primary: __assign(__assign({}, exports.blue), (mode === 'dark' && {
        main: exports.blue[400],
      })), divider: mode === 'dark' ? (0, styles_1.alpha)(exports.blue[100], 0.08) : grey[100], primaryDark: exports.blueDark, mode: mode
    }, (mode === 'dark' && {
      background: {
        default: exports.blueDark[800],
        paper: exports.blueDark[900],
      },
    })), {
      common: {
        black: '#1D1D1D',
      }
    }), (mode === 'light' && {
      text: {
        primary: grey[900],
        secondary: grey[700],
      },
    })), (mode === 'dark' && {
      text: {
        primary: '#fff',
        secondary: grey[400],
      },
    })), {
      grey: grey, error: {
        50: '#FFF0F1',
        100: '#FFDBDE',
        200: '#FFBDC2',
        300: '#FF99A2',
        400: '#FF7A86',
        500: '#FF505F',
        main: '#EB0014',
        600: '#EB0014',
        700: '#C70011',
        800: '#94000D',
        900: '#570007',
      }, success: __assign(__assign(__assign({ 50: '#E9FBF0', 100: '#C6F6D9', 200: '#9AEFBC', 300: '#6AE79C', 400: '#3EE07F', 500: '#21CC66', 600: '#1DB45A' }, (mode === 'dark' && {
        main: '#1DB45A', // contrast 6.17:1 (blueDark.800)
      })), (mode === 'light' && {
        main: '#1AA251', // contrast 3.31:1
      })), { 700: '#1AA251', 800: '#178D46', 900: '#0F5C2E' }), warning: {
        50: '#FFF9EB',
        100: '#FFF3C1',
        200: '#FFECA1',
        300: '#FFDC48',
        400: '#F4C000',
        500: '#DEA500',
        main: '#DEA500',
        600: '#D18E00',
        700: '#AB6800',
        800: '#8C5800',
        900: '#5A3600', // vs white bg: WCAG 10.7 AAA, APCA 95 Best for text
      }
    }),
    shape: {
      borderRadius: 10,
    },
    spacing: 10,
    typography: {
      fontFamily: __spreadArray(['"IBM Plex Sans"'], systemFont, true).join(','),
      fontFamilyCode: [
        'Consolas',
        'Menlo',
        'Monaco',
        'Andale Mono',
        'Ubuntu Mono',
        'monospace',
      ].join(','),
      fontFamilyTagline: __spreadArray(['"PlusJakartaSans-ExtraBold"'], systemFont, true).join(','),
      fontFamilySystem: systemFont.join(','),
      fontWeightSemiBold: 600,
      fontWeightExtraBold: 800,
      h1: __assign({ fontFamily: __spreadArray(['"PlusJakartaSans-ExtraBold"'], systemFont, true).join(','), fontSize: 'clamp(2.625rem, 1.2857rem + 3.5714vw, 4rem)', fontWeight: 800, lineHeight: 78 / 70 }, (mode === 'light' && {
        color: exports.blueDark[900],
      })),
      h2: {
        fontFamily: __spreadArray(['"PlusJakartaSans-ExtraBold"'], systemFont, true).join(','),
        fontSize: 'clamp(1.5rem, 0.9643rem + 1.4286vw, 2.25rem)',
        fontWeight: 800,
        lineHeight: 44 / 36,
        color: mode === 'dark' ? grey[100] : exports.blueDark[700],
      },
      h3: {
        fontFamily: __spreadArray(['"PlusJakartaSans-Bold"'], systemFont, true).join(','),
        fontSize: defaultTheme.typography.pxToRem(36),
        lineHeight: 44 / 36,
        letterSpacing: 0.2,
      },
      h4: {
        fontFamily: __spreadArray(['"PlusJakartaSans-Bold"'], systemFont, true).join(','),
        fontSize: defaultTheme.typography.pxToRem(28),
        lineHeight: 42 / 28,
        letterSpacing: 0.2,
      },
      h5: {
        fontFamily: __spreadArray(['"PlusJakartaSans-Bold"'], systemFont, true).join(','),
        fontSize: defaultTheme.typography.pxToRem(24),
        lineHeight: 36 / 24,
        letterSpacing: 0.1,
        color: mode === 'dark' ? exports.blue[300] : exports.blue.main,
      },
      h6: {
        fontSize: defaultTheme.typography.pxToRem(20),
        lineHeight: 30 / 20,
      },
      button: {
        textTransform: 'initial',
        fontWeight: 700,
        letterSpacing: 0,
      },
      subtitle1: {
        fontSize: defaultTheme.typography.pxToRem(18),
        lineHeight: 24 / 18,
        letterSpacing: 0,
        fontWeight: 500,
      },
      body1: {
        fontSize: defaultTheme.typography.pxToRem(16),
        lineHeight: 24 / 16,
        letterSpacing: 0,
      },
      body2: {
        fontSize: defaultTheme.typography.pxToRem(14),
        lineHeight: 21 / 14,
        letterSpacing: 0,
      },
      caption: {
        display: 'inline-block',
        fontSize: defaultTheme.typography.pxToRem(12),
        lineHeight: 18 / 12,
        letterSpacing: 0,
        fontWeight: 700,
      },
    },
  });
};
exports.getDesignTokens = getDesignTokens;
function getThemedComponents(theme) {
  var _a;
  return {
    components: {
      MuiButtonBase: {
        defaultProps: {
          disableTouchRipple: true,
        },
      },
      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
        styleOverrides: {
          sizeLarge: __assign(__assign({ padding: '0.875rem 1rem' }, theme.typography.body1), { lineHeight: 21 / 16, fontWeight: 700 }),
          sizeSmall: {
            padding: theme.spacing(0.5, 1),
            marginLeft: theme.spacing(-1),
          },
          containedPrimary: {
            backgroundColor: theme.palette.primary[500],
            color: '#fff',
          },
        },
        variants: [
          {
            // @ts-ignore internal repo module augmentation issue
            props: { variant: 'code' },
            style: {
              color: theme.palette.mode === 'dark' ? theme.palette.grey[400] : theme.palette.grey[800],
              border: '1px solid',
              borderColor: theme.palette.mode === 'dark'
                ? theme.palette.primaryDark[400]
                : theme.palette.grey[300],
              backgroundColor: theme.palette.mode === 'dark'
                ? theme.palette.primaryDark[700]
                : theme.palette.grey[50],
              fontFamily: theme.typography.fontFamilyCode,
              fontWeight: 400,
              fontSize: defaultTheme.typography.pxToRem(13),
              lineHeight: 21 / 14,
              letterSpacing: 0,
              WebkitFontSmoothing: 'subpixel-antialiased',
              '&:hover, &.Mui-focusVisible': {
                borderColor: theme.palette.primary.main,
                backgroundColor: theme.palette.mode === 'dark'
                  ? theme.palette.primaryDark[600]
                  : theme.palette.primary[50],
                '& .MuiButton-endIcon': {
                  color: theme.palette.mode === 'dark'
                    ? theme.palette.primary[300]
                    : theme.palette.primary.main,
                },
              },
              '& .MuiButton-startIcon': {
                color: theme.palette.grey[400],
              },
              '& .MuiButton-endIcon': {
                display: 'inline-block',
                position: 'absolute',
                right: 0,
                marginRight: 10,
                color: theme.palette.mode === 'dark' ? theme.palette.grey[400] : theme.palette.grey[700],
              },
            },
          },
          {
            // @ts-ignore internal repo module augmentation issue
            props: { variant: 'link' },
            style: {
              fontSize: theme.typography.pxToRem(14),
              fontWeight: 700,
              color: theme.palette.mode === 'dark'
                ? theme.palette.primary[300]
                : theme.palette.primary[600],
              mb: 1,
              '& svg': {
                ml: -0.5,
              },
            },
          },
        ],
      },
      MuiIconButton: {
        variants: [
          {
            props: { color: 'primary' },
            style: {
              height: 34,
              width: 34,
              border: "1px solid ".concat(theme.palette.mode === 'dark'
                ? theme.palette.primaryDark[700]
                : theme.palette.grey[200]),
              borderRadius: theme.shape.borderRadius,
              color: theme.palette.mode === 'dark'
                ? theme.palette.primary[300]
                : theme.palette.primary[500],
              '&:hover': {
                borderColor: theme.palette.mode === 'dark'
                  ? theme.palette.primaryDark[600]
                  : theme.palette.grey[300],
                background: theme.palette.mode === 'dark'
                  ? (0, styles_1.alpha)(theme.palette.primaryDark[700], 0.4)
                  : theme.palette.grey[50],
              },
            },
          },
        ],
      },
      MuiMenu: {
        styleOverrides: {
          paper: {
            mt: 0.5,
            minWidth: 160,
            elevation: 0,
            color: theme.palette.text.secondary,
            backgroundImage: 'none',
            backgroundColor: theme.palette.mode === 'dark'
              ? theme.palette.primaryDark[900]
              : theme.palette.background.paper,
            border: "1px solid ".concat(theme.palette.mode === 'dark'
              ? theme.palette.primaryDark[700]
              : theme.palette.grey[200]),
            '& .MuiMenuItem-root': {
              fontSize: theme.typography.pxToRem(14),
              fontWeight: 500,
              '&:hover': {
                backgroundColor: theme.palette.mode === 'dark'
                  ? (0, styles_1.alpha)(theme.palette.primaryDark[700], 0.4)
                  : theme.palette.grey[50],
              },
              '&:focus': {
                backgroundColor: theme.palette.mode === 'dark'
                  ? (0, styles_1.alpha)(theme.palette.primaryDark[700], 0.4)
                  : theme.palette.grey[50],
              },
              '&.Mui-selected': {
                fontWeight: 500,
                color: theme.palette.mode === 'dark'
                  ? theme.palette.primary[300]
                  : theme.palette.primary[600],
                backgroundColor: theme.palette.mode === 'dark'
                  ? theme.palette.primaryDark[700]
                  : (0, styles_1.alpha)(theme.palette.primary[100], 0.6),
              },
            },
          },
        },
      },
      MuiPopover: {
        styleOverrides: {
          paper: {
            boxShadow: "0px 4px 20px ".concat(theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(170, 180, 190, 0.3)'),
          },
        },
      },
      MuiContainer: {
        styleOverrides: {
          root: (_a = {},
            _a[theme.breakpoints.up('md')] = {
              paddingLeft: theme.spacing(2),
              paddingRight: theme.spacing(2),
            },
            _a),
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            borderColor: theme.palette.mode === 'dark'
              ? (0, styles_1.alpha)(theme.palette.primary[100], 0.08)
              : theme.palette.grey[100],
          },
        },
      },
      MuiLink: {
        defaultProps: {
          underline: 'none',
        },
        styleOverrides: {
          root: {
            color: theme.palette.mode === 'dark'
              ? theme.palette.primary[300]
              : theme.palette.primary[600],
            fontWeight: 700,
            display: 'inline-flex',
            alignItems: 'center',
            '&:hover': {
              color: theme.palette.mode === 'dark'
                ? theme.palette.primary[200]
                : theme.palette.primary[700],
            },
            '&.MuiTypography-body1 > svg': {
              marginTop: 2,
            },
            '& svg:last-child': {
              marginLeft: 2,
            },
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: function (_a) {
            var _b = _a.ownerState, color = _b.color, variant = _b.variant;
            return (__assign(__assign(__assign({ fontWeight: 500 }, (variant === 'outlined' &&
              color === 'default' && {
              color: theme.palette.mode === 'dark' ? theme.palette.grey[300] : theme.palette.grey[900],
              backgroundColor: 'transparent',
              borderColor: theme.palette.mode === 'dark'
                ? (0, styles_1.alpha)(theme.palette.grey[100], 0.1)
                : theme.palette.grey[200],
            })), (variant === 'filled' &&
              color === 'default' && {
              border: '1px solid transparent',
              color: theme.palette.mode === 'dark' ? '#fff' : theme.palette.primary[800],
              backgroundColor: theme.palette.mode === 'dark'
                ? theme.palette.primaryDark[500]
                : theme.palette.primary[100],
              '&:hover': {
                backgroundColor: theme.palette.mode === 'dark'
                  ? theme.palette.primaryDark[600]
                  : theme.palette.primary[200],
              },
            })), (variant === 'light' && __assign(__assign(__assign({}, (color === 'default' && {
              color: theme.palette.mode === 'dark'
                ? theme.palette.primary[200]
                : theme.palette.primary[700],
              backgroundColor: theme.palette.mode === 'dark'
                ? (0, styles_1.alpha)(theme.palette.primaryDark[700], 0.5)
                : (0, styles_1.alpha)(theme.palette.primary[100], 0.3),
            })), (color === 'warning' && {
              color: theme.palette.mode === 'dark' ? '#fff' : theme.palette.warning[900],
              backgroundColor: theme.palette.mode === 'dark'
                ? theme.palette.warning[900]
                : theme.palette.warning[100],
            })), (color === 'success' && {
              color: theme.palette.mode === 'dark' ? '#fff' : theme.palette.success[900],
              backgroundColor: theme.palette.mode === 'dark'
                ? theme.palette.success[900]
                : theme.palette.success[100],
            })))));
          },
          deleteIcon: {
            color: theme.palette.mode === 'dark' ? '#fff' : theme.palette.primary[700],
            '&:hover': {
              color: theme.palette.mode === 'dark'
                ? theme.palette.grey[100]
                : theme.palette.primary[900],
            },
          },
        },
      },
      MuiList: {
        styleOverrides: {
          root: {
            padding: 0,
          },
        },
      },
      MuiListItemButton: {
        styleOverrides: {
          root: {
            padding: '8px',
            textTransform: 'none',
            fontWeight: 500,
            fontSize: theme.typography.pxToRem(14),
            color: theme.palette.mode === 'dark' ? theme.palette.grey[300] : theme.palette.grey[700],
            borderRadius: 0,
            '&:hover': {
              backgroundColor: theme.palette.mode === 'dark'
                ? (0, styles_1.alpha)(theme.palette.primaryDark[700], 0.4)
                : theme.palette.grey[50],
            },
            '&.Mui-selected': {
              color: theme.palette.mode === 'dark' ? '#fff' : theme.palette.primary[500],
              borderRadius: 10,
              border: '1px solid',
              borderColor: theme.palette.mode === 'dark'
                ? "".concat(theme.palette.primary[700], " !important")
                : "".concat(theme.palette.primary[500], " !important"),
              backgroundColor: theme.palette.mode === 'dark'
                ? theme.palette.primaryDark[700]
                : theme.palette.primary[50],
              '&:hover': {
                backgroundColor: theme.palette.mode === 'dark'
                  ? theme.palette.primaryDark[600]
                  : theme.palette.primary[100],
              },
            },
          },
        },
      },
      MuiSelect: {
        defaultProps: {
          IconComponent: ArrowDropDownRounded_1.default,
        },
        styleOverrides: {
          iconFilled: {
            top: 'calc(50% - .25em)',
          },
        },
      },
      MuiTab: {
        defaultProps: {
          disableTouchRipple: true,
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primaryDark[900] : '#fff',
            '&[href]': {
              textDecorationLine: 'none',
            },
          },
          outlined: __assign(__assign({
            display: 'block', borderColor: theme.palette.mode === 'dark'
              ? theme.palette.primaryDark[500]
              : theme.palette.grey[200]
          }, (theme.palette.mode === 'dark' && {
            backgroundColor: theme.palette.primaryDark[700],
          })), {
            'a&, button&': {
              '&:hover': {
                boxShadow: "0px 4px 20px ".concat(theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(170, 180, 190, 0.3)'),
              },
            }
          }),
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            padding: theme.spacing(1, 2),
            borderColor: theme.palette.divider,
          },
          head: {
            color: theme.palette.text.primary,
            fontWeight: 700,
          },
          body: {
            color: theme.palette.text.secondary,
          },
        },
      },
      MuiToggleButtonGroup: {
        styleOverrides: {
          root: {
            backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primaryDark[900] : '#fff',
          },
        },
      },
      MuiToggleButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: 500,
            color: theme.palette.mode === 'dark' ? theme.palette.grey[300] : theme.palette.grey[700],
            borderColor: theme.palette.mode === 'dark'
              ? theme.palette.primaryDark[500]
              : theme.palette.grey[200],
            '&.Mui-selected': {
              color: theme.palette.mode === 'dark' ? '#fff' : theme.palette.primary[500],
              borderColor: theme.palette.mode === 'dark'
                ? "".concat(theme.palette.primary[700], " !important")
                : "".concat(theme.palette.primary[500], " !important"),
              backgroundColor: theme.palette.mode === 'dark'
                ? theme.palette.primaryDark[700]
                : theme.palette.primary[50],
              '&:hover': {
                backgroundColor: theme.palette.mode === 'dark'
                  ? theme.palette.primaryDark[600]
                  : theme.palette.primary[100],
              },
            },
          },
        },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            padding: '5px 9px',
          },
        },
      },
      MuiSwitch: {
        styleOverrides: {
          root: {
            width: 32,
            height: 20,
            padding: 0,
            '& .MuiSwitch-switchBase': {
              '&.Mui-checked': {
                transform: 'translateX(11px)',
                color: '#fff',
              },
            },
          },
          switchBase: {
            height: 20,
            width: 20,
            padding: 0,
            color: '#fff',
            '&.Mui-checked + .MuiSwitch-track': {
              opacity: 1,
            },
          },
          track: {
            opacity: 1,
            borderRadius: 32,
            backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[400],
          },
          thumb: {
            flexShrink: 0,
            width: '14px',
            height: '14px',
          },
        },
      },
      MuiPaginationItem: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: 700,
            color: theme.palette.mode === 'dark' ? theme.palette.grey[300] : theme.palette.grey[700],
            borderColor: theme.palette.mode === 'dark'
              ? theme.palette.primaryDark[500]
              : theme.palette.grey[200],
            '&.Mui-selected': {
              color: theme.palette.mode === 'dark' ? '#fff' : theme.palette.primary[500],
              borderColor: theme.palette.mode === 'dark'
                ? "".concat(theme.palette.primary[700], " !important")
                : "".concat(theme.palette.primary[500], " !important"),
              backgroundColor: theme.palette.mode === 'dark'
                ? theme.palette.primaryDark[700]
                : theme.palette.primary[50],
              '&:hover': {
                backgroundColor: theme.palette.mode === 'dark'
                  ? theme.palette.primaryDark[600]
                  : theme.palette.primary[100],
              },
            },
          },
        },
      },
      MuiCssBaseline: {
        defaultProps: {
          enableColorScheme: true,
        },
      },
    },
  };
}
exports.getThemedComponents = getThemedComponents;
var darkTheme = (0, styles_1.createTheme)((0, exports.getDesignTokens)('dark'));
exports.brandingDarkTheme = (0, utils_1.deepmerge)(darkTheme, getThemedComponents(darkTheme));
