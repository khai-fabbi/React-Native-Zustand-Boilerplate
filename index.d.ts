declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.json";

import { Theme } from "@react-navigation/native";
import { palette } from "./src/shared/theme/themes";

declare module "@react-navigation/native" {
  type DarkModeColor = {
    foreground?: string;
    tabBar?: string;
  };
  export type ExtendedTheme = {
    dark: boolean;
    colors: typeof palette & Theme["colors"] & DarkModeColor;
  };
  export function useTheme(): ExtendedTheme;
}
