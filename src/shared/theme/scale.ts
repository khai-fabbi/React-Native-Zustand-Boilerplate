import { Dimensions, Platform } from "react-native";
import { isTablet } from "react-native-device-info";

export const isAndroid = Platform.OS === "android";
const { width, height } = Dimensions.get("window");

const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];
const isTabletDevices = () => {
  if (Platform.OS === "android") {
    return longDimension / shortDimension <= 1.6;
  }

  return isTablet();
};
//Guideline sizes are based on standard ~5" screen mobile device and 7,9" screen tablet & ipad
const guidelineBaseWidth = isTabletDevices() ? 768 : 430;
const guidelineBaseHeight = isTabletDevices() ? 1024 : 932;

const scale = (size: number) => (shortDimension / guidelineBaseWidth) * size;
const verticalScale = (size: number) =>
  (longDimension / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.5) => {
  const num = size + (scale(size) - size) * factor;
  if (isAndroid) {
    return num - 1.2;
  }

  return num;
};
const ratioW = (size: number) => (shortDimension * size) / 100;

export {
  scale,
  verticalScale,
  moderateScale,
  ratioW,
  width,
  height,
  isTabletDevices,
};
