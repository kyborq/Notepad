import React, { useRef } from 'react';
import { Animated, Dimensions, PanResponder } from 'react-native';

type Props = {
  onSwipe?: () => void;
  children?: React.ReactNode;
};

export const Swipable: React.FC<Props> = ({ onSwipe, children }) => {
  const { width } = Dimensions.get('window');

  const pan = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => false,
      onMoveShouldSetPanResponderCapture: (e, g) => Math.abs(g.dx) > 10,
      onMoveShouldSetPanResponder: (e, g) => false,
      onPanResponderGrant: () => {},
      onPanResponderMove: Animated.event([null, { dx: pan.x }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (e, g) => {
        if (g.vx > 2 || g.dx > 200 / 2 || g.dx < -200 / 2) {
          Animated.spring(pan, {
            toValue: { x: g.dx < 0 ? -width : width, y: 0 },
            useNativeDriver: true,
          }).start();

          setTimeout(() => onSwipe && onSwipe(), 200);
        } else {
          Animated.spring(pan, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: true,
          }).start();
        }
      },
      onPanResponderTerminate: () => {
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: true,
        }).start();
      },
    }),
  ).current;

  return (
    <Animated.View
      style={{ transform: pan.getTranslateTransform() }}
      {...panResponder.panHandlers}>
      {children}
    </Animated.View>
  );
};
