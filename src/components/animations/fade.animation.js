import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";

export const FadeInView = ({ duration = 1500, ...props }) => {
  //const av = new Animated.Value(0);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    fadeAnim.addListener((value) => {
      console.log(value);
    });
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: duration,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, duration]);

  return (
    <Animated.View styled={{ ...props.style, opacity: fadeAnim }}>
      {props.children}
    </Animated.View>
  );
};
