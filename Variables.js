import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export const SCREEN_HEIGHT = height;
export const SCREEN_WIDTH = width;

export const percentage = (Dimension, percentage) => {
  return (Dimension / 100) * percentage;
};
