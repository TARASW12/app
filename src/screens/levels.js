import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {levels} from '../constants/leveles';
import {useEffect, useState} from 'react';
import {getLevelProgress} from '../utils/userProgress';

const columns = 3;
const rows = 4;
const spacing = 10; // spacing between items
const buttonSize =
  (Dimensions.get('window').width - spacing * (columns + 0.1)) / columns;

const LevelButton = ({level, passedLevel, navigation}) => {
  const blocked = level > passedLevel + 1;
  return (
    <View style={styles.levelContainer}>
      <TouchableOpacity
        disabled={level > passedLevel + 1}
        style={styles.levelButton}
        onPress={() => navigation.navigate('Game', {level})}>
        <Image
          source={require('../assets/images/levels/joker-leve-1.png')}
          style={styles.backgroundImage}
          resizeMode="cover"
        />
        {blocked && <View style={styles.disabledOverlay} />}
      </TouchableOpacity>
      <Text style={styles.levelText}>{`Level ${level}`}</Text>
    </View>
  );
};

export const Levels = ({navigation, route}) => {
  const passed = route?.params?.passed;

  const [level, setLevel] = useState(null);
  useEffect(() => {
    const fetchLevelProgress = async () => {
      const retrievedLevel = await getLevelProgress();
      setLevel(retrievedLevel);
    };

    fetchLevelProgress();
  }, [passed]);
  return (
    <ImageBackground
      source={require('../assets/images/rainy-city.png')}
      style={{
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
      }}>
      {/*<View>*/}
      {/*  <Image source={require('../assets/images/goBack.png')} />*/}
      {/*</View>*/}
      <View style={styles.container}>
        <FlatList
          scrollEnabled={true}
          data={levels}
          renderItem={({item}) => (
            <LevelButton
              passedLevel={level}
              navigation={navigation}
              level={item.id}
            />
          )}
          keyExtractor={item => item.id.toString()}
          numColumns={3}
          columnWrapperStyle={{justifyContent: 'space-between'}}
        />
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  levelContainer: {
    alignItems: 'center',
    marginHorizontal: 14,
    marginBottom: 20,
    marginTop: 50,
  },
  levelButton: {
    width: 90, // Match this with backgroundImage
    height: 90, // Match this with backgroundImage
    borderRadius: 45, // Half of width/height
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    overflow: 'hidden',
  },
  disabledOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Darker semi-transparent black
    borderRadius: 45,
  },
  levelText: {
    fontSize: 22,
    color: 'white',
    // fontWeight: 'bold',
    fontStyle: 'italic',
    marginTop: 1,
  },
  backgroundImage: {
    width: 90, // Match this with levelButton
    height: 90, // Match this with levelButton
    borderRadius: 45, // Half of width/height
    opacity: 1,
  },
});
