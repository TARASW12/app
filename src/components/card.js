import CardFlip from 'react-native-card-flip';
import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useEffect, useRef, useState} from 'react';

function Card({
  card,
  column,
  cardDisabled,
  setWrongAttempt,
  setCorrectAttempt,
  flipAll,
}) {
  const cardRef = useRef(null);
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    if (flipAll) {
      cardRef.current.flip();
    }
  }, [flipAll]);
  const handleCardFlip = () => {
    cardRef.current.flip();
    setIsClicked(true); // Set card as clicked
    if (card.correct) {
      setCorrectAttempt(prev => prev + 1);
    } else {
      setWrongAttempt(prev => prev + 1);
    }
  };

  return (
    <CardFlip
      style={
        column === 3
          ? styles.cardContainer
          : {...styles.cardContainer, width: '23%', marginVertical: 5}
      }
      ref={cardRef}>
      <TouchableOpacity
        activeOpacity={1}
        disabled={isClicked || cardDisabled}
        onPress={handleCardFlip}
        style={
          !isClicked
            ? styles.cardBack
            : {
                ...styles.cardBack,
                backgroundColor: card.correct ? 'lightgreen' : 'red',
              }
        }>
        <Image
          source={card.image}
          style={isClicked ? styles.image : styles.questionImage}
        />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        disabled={isClicked || cardDisabled} // Disable touch based on state
        onPress={handleCardFlip}
        style={styles.cardFront}>
        <Image
          source={require('../assets/images/questionMark.png')}
          style={styles.questionImage}
        />
      </TouchableOpacity>
    </CardFlip>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '32%',
    height: 100,
    marginHorizontal: 3,
    marginVertical: 6,
  },
  cardFront: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  cardBack: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    backgroundColor: 'lightgreen',
  },
  image: {
    width: '90%',
    height: '90%',
  },
  questionImage: {
    width: '100%',
    height: '100%',
  },
});
export default Card;
