import {Path, Svg} from 'react-native-svg';

export const MusicIcon = ({
  color = '#000',
  width = 40,
  height = 40,
  style = {},
  circleColor = '#fff',
}) => (
  <Svg
    width={width}
    version="1.1"
    id="Layer_1"
    height={height}
    viewBox="0 -0.91 122.88 122.88"
    fill="#fff"
    xmlns="http://www.w3.org/2000/svg"
    style={style}>
    {/*<Circle*/}
    {/*  cx="25"*/}
    {/*  cy="25"*/}
    {/*  r="24"*/}
    {/*  fill={circleColor}*/}
    {/*/>*/}
    <Path
      d="M7.6,22.7c-2.91-2.12-3.56-6.2-1.44-9.12s6.2-3.56,9.11-1.44L120.2,88.64c2.91,2.12,3.55,6.2,1.43,9.12 c-2.12,2.91-6.2,3.56-9.11,1.44L7.6,22.7L7.6,22.7z M88.85,51.97V23.09l-28.42,8.16l-24.01-17.5L96.79,0v57.76L88.85,51.97 L88.85,51.97z M36.33,57.46v45.08c0.03,0.32,0.05,0.64,0.05,0.96v0.01c0,7.76-8.14,15.46-18.19,17.2C8.15,122.44,0,117.55,0,109.79 c0-7.76,8.15-15.46,18.19-17.19c3.78-0.65,7.29-0.36,10.21,0.66V51.68L36.33,57.46L36.33,57.46z M92.87,98.69 c-2.77,2.77-6.71,4.88-11.09,5.63c-8.39,1.45-15.19-2.63-15.19-9.12c-0.01-4.03,2.62-8.04,6.62-10.84L92.87,98.69L92.87,98.69z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
