import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useCallback, useEffect, useMemo, useState} from 'react';
import {MusicIconOn} from '../assets/icons/musicOn';
import {MusicIcon} from '../assets/icons/music';
import Sound from 'react-native-sound';
import LinearGradient from 'react-native-linear-gradient';

export const MainScreen = ({navigation}) => {
  const [isMusicOn, setMusicOn] = useState(true);

  const sound = useMemo(
    () =>
      new Sound('rain.mp3', Sound.MAIN_BUNDLE, error => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
        sound.setNumberOfLoops(-1);
      }),
    [],
  );
  console.log(sound);
  useEffect(() => {
    sound.setVolume(1);
    setTimeout(() => {
      if (isMusicOn) {
        sound.play(success => {
          if (success) {
            console.log('successfully finished playing');
          } else {
            console.log('playback failed due to audio decoding errors');
          }
        });
      }
    });
    return () => {
      sound.release();
    };
  }, []);

  const toggleMusic = useCallback(async () => {
    if (isMusicOn) {
      sound.pause();
    } else {
      sound.play();
    }
    setMusicOn(prevMusicOn => !prevMusicOn);
  }, [isMusicOn, sound]);

  return (
    <ImageBackground
      source={require('../assets/images/jokerBackground.png')}
      style={{flex: 1, resizeMode: 'cover', justifyContent: 'center'}}>
      <TouchableOpacity
        style={{position: 'absolute', top: 10, right: 10}}
        onPress={toggleMusic}>
        {isMusicOn ? <MusicIconOn /> : <MusicIcon />}
      </TouchableOpacity>

      <View style={styles.container}>
        <Text
          style={{
            marginTop: 60,
            paddingTop: 43,
            textAlign: 'center',
            color: 'white',
            fontSize: 52,
            fontWeight: 'bold',
            fontStyle: 'italic',
          }}>
          Let's play sweetie
        </Text>
        <TouchableOpacity
          style={styles.playButton}
          onPress={() => navigation.navigate('Levels')}>
          <LinearGradient
            colors={['white', 'green']}
            style={styles.gradient}
            start={{x: 0, y: 3}}
            end={{x: 1, y: 0}}>
            <Text style={styles.playButtonText}>Play</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },

  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#8a5307',
    width: '80%',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#fff',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
  modalTitle: {
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  switchText: {
    fontSize: 18,
    color: '#fff',
  },
  playButton: {
    marginTop: 60,
    width: 450, // Adjust this to your desired width
    height: 60, // Adjust this for height
    borderRadius: 30, // This will make the button have nicely rounded corners
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    overflow: 'hidden',
  },
  gradient: {
    flex: 1,
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  playButtonText: {
    color: 'white',
    fontSize: 28,
    fontStyle: 'italic',
    fontWeight: 'bold',
  },
});
