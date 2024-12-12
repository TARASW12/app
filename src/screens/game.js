import {levels} from '../constants/leveles';
import {shuffleArray} from '../utils';
import {useEffect, useMemo, useState} from 'react';
import {GameModal} from '../components/gameModal';
import {FlatList, ImageBackground, View} from 'react-native';
import Card from '../components/card';
import {Timer} from '../components/timer';
import {SuccessModal} from '../components/successModal';
import {LooseModal} from '../components/loosModal';
import {getLevelProgress, saveLevelProgress} from '../utils/userProgress';

export const Game = ({route, navigation}) => {
  const {level} = route.params;
  const {images, time, column, id, correctVariant, wrongAttemptAmount} =
    levels.find(l => l.id === level);

  const [isStartGame, setStartGame] = useState(false);
  const [cardDisabled, setCardDisabled] = useState(true);
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [looserModalVisible, setLooserModalVisible] = useState(false);
  const [wrongAttempt, setWrongAttempt] = useState(0);
  const [correctAttempt, setCorrectAttempt] = useState(0);
  const [modalVisible, setModalVisible] = useState(true);
  const [showTimer, setShowTimer] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showLooserModal, setShowLooserModal] = useState(false);
  const [shouldFlipAll, setShouldFlipAll] = useState(false);

  const goOnLevelScreenSuccess = async () => {
    console.log('regerger');
    const lvl = await getLevelProgress();
    console.log(lvl, id, 'HERE');
    if (lvl < id) {
      await saveLevelProgress(id);
    }
    setSuccessModalVisible(false);
    navigation.navigate('Levels', {passed: Date.now()});
  };

  const goOnLevelScreenLooser = () => {
    console.log('werrewe');
    setLooserModalVisible(false);
    navigation.navigate('Levels', {passed: Date.now()});
  };
  useEffect(() => {
    if (correctAttempt === correctVariant) {
      setShowSuccessModal(true);
      setSuccessModalVisible(true);
    }
  }, [correctAttempt, correctVariant]);

  useEffect(() => {
    if (wrongAttempt === wrongAttemptAmount) {
      setShowLooserModal(true);
      setLooserModalVisible(true);
    }
  }, [wrongAttempt, wrongAttemptAmount]);

  const startTimerGame = () => {
    setModalVisible(false);
    setStartGame(true);
    setShowTimer(true);
  };

  const startGame = () => {
    setShowTimer(false);
    setStartGame(true);
    setShouldFlipAll(true);
    setCardDisabled(false);
  };

  const randomizedPictures = useMemo(() => shuffleArray(images), [images]);

  return (
    <>
      {modalVisible && (
        <GameModal
          attempt={wrongAttemptAmount}
          modalVisible={modalVisible}
          time={time}
          setModalVisible={startTimerGame}
        />
      )}

      {isStartGame && (
        <ImageBackground
          source={require('../assets/images/jokerBackground.png')}
          style={{
            flex: 9, // Taking up 90% of the parent container
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {showSuccessModal && (
            <SuccessModal
              successModalVisible={successModalVisible}
              goOnLevelScreenSuccess={goOnLevelScreenSuccess}
            />
          )}
          {showLooserModal && (
            <LooseModal
              looserModalVisible={looserModalVisible}
              goOnLevelScreenLooser={goOnLevelScreenLooser}
            />
          )}
          <FlatList
            contentContainerStyle={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            data={randomizedPictures}
            renderItem={({item}) => (
              <Card
                cardDisabled={cardDisabled}
                flipAll={shouldFlipAll}
                setWrongAttempt={setWrongAttempt}
                setCorrectAttempt={setCorrectAttempt}
                column={column}
                card={item}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
            numColumns={column}
          />
        </ImageBackground>
      )}
      {isStartGame && showTimer && (
        <View
          style={{
            flex: 1, // Taking up 10% of the parent container
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Timer handleFinishTimer={startGame} time={time} />
        </View>
      )}
    </>
  );
};
