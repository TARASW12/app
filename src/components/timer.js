import CountDownTimer from 'react-native-countdown-timer-hooks';

export const Timer = ({handleFinishTimer, time}) => {
  return (
    <CountDownTimer
      // ref={refTimer}
      timestamp={time}
      timerCallback={handleFinishTimer}
      containerStyle={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 30,
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
      }}
      textStyle={{
        fontSize: 22,
        marginTop: 2,
        letterSpacing: 3,
        color: 'white',
      }}
    />
  );
};
