import {Circle, Path, Svg} from 'react-native-svg';

export const CloseIcon = ({
  color = '#000',
  width = 25, // Adjusted default width and height
  height = 25,
  style = {},
  circleColor = '#fff',
}) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 50 50"
    fill="#000"
    xmlns="http://www.w3.org/2000/svg"
    style={style}>
    <Circle cx="25" cy="25" r="24" fill={circleColor} />
    <Path
      d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
