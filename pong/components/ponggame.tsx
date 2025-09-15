import React , { useEffect, useRef, useState } from 'react';
import { View, Animated, Dimensions, StyleSheet, PanResponder } from 'react-native';

{
  // gng ts pmo icl ^^
}

const { width, height } = Dimensions.get('window');
const ballSize = 20;
const PADDLE_WIDTH = 100;
const PADDLE_HEIGHT = 20;
const PADDLE_OFFSET = 30;

export default function PongGame() {
    const ballx = useRef(new Animated.Value(width / 2 - ballSize / 2)).current;
    const bally = useRef(new Animated.Value(height / 2 - ballSize / 2)).current;

    const ballPos = useRef({ x: width / 2 - BALL_SIZE / 2, y: height / 2 - BALL_SIZE / 2 });

    const [ballDirection, setBallDirection] = useState({ x: 2, y: 2 })

    const playerx = useRef(new Animated.Value(width / 2 - PADDLE_WIDTH / 2)).current;
    const opponentx = useRef(new Animated.Value(width / 2 - PADDLE_WIDTH / 2)).current;

    // ball movement
useEffect(() => {
  const interval = setInterval(() => {
    ballPos.current.x += ballDirection.x;
    ballx.setValue(ballPos.current.x); // IF IT WORKS DONT TOUCH IT
  }, 16);

  return () => clearInterval(interval);
}, [ballDirection]);

}