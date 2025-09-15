import React , { useEffect, useRef, useState } from 'react';
import { View, Animations, Dimensions, StyleSheet, PanResponder } from 'react-native';

{
  // gng ts pmo icl ^^
}

const { width, height } = Dimensions.get('window');
const ballSize = 20;
const PADDLE_WIDTH = 100;
const PADDLE_HEIGHT = 20;
const PADDLE_OFFSET = 30;

export default function PongGame() {
    const [ballPosition, setBallPosition] = useState({ x: width / 2 - ballSize / 2, y: height / 2 - ballSize / 2 })
}