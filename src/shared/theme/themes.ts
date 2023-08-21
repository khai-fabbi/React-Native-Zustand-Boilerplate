import { DefaultTheme, ExtendedTheme } from "@react-navigation/native";

export const palette = {
  primary: "#1DC071",
  secondary: "#6F49FD",
  background: "#f6f8fa",
  white: "#fff",
  black: "#13131A",
  button: "#1c1e21",
  shadow: "#757575",
  text: "#171725",
  text2: "#4B5264",
  text3: "#808191",
  text4: "#B2B3BD",
  borderColor: "#d0d7de",
  borderColorDark: "#333942",
  placeholder: "#a1a1a1",
  error: "#EB5757",
  title: "rgb(102, 102, 102)",
  separator: "rgb(194, 194, 195)",
  highlight: "rgb(199, 198, 203)",
  blackOverlay: "rgba(0,0,0,0.6)",
  iconWhite: "#fff",
  iconBlack: "#101214",
  dynamicWhite: "#fff",
  dynamicBlack: "#1c1e21",
  dynamicBackground: "#fff",
  transparent: "transparent",
  calpyse: "#2b7488",
};

export const LightTheme: ExtendedTheme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    ...palette,
  },
};

export const DarkTheme: ExtendedTheme = {
  ...DefaultTheme,
  colors: {
    ...LightTheme.colors,
    background: palette.black,
    foreground: palette.white,
    text: palette.white,
    tabBar: palette.black,
    iconWhite: palette.black,
    iconBlack: palette.white,
    dynamicBackground: palette.dynamicBlack,
    shadow: palette.transparent,
    borderColor: palette.borderColorDark,
  },
};
