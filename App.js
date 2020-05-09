import React from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import Animated, { Easing } from "react-native-reanimated";

/* Illustrations */
import { LogoOverLayHeight, LogoSvgWidth, FormSvgHeigt } from "./Variables";

import Logo from "./src/Components/Logo";
import AuthBtn from "./src/Components/AuthBtn";

/* Logo Svg */
import LogoSvg from "./src/assets/logo.svg";
import MailSvg from "./src/assets/email.svg";

const App = (props) => {
  return <View></View>;
};

App.options = {
  topBar: {
    visible: false,
  },
};

export default App;
