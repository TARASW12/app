import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveLevelProgress = async level => {
  try {
    await AsyncStorage.setItem('userLevelProgress', level.toString());
  } catch (error) {
    console.error('Error saving level progress:', error);
  }
};

export const getLevelProgress = async () => {
  try {
    const value = await AsyncStorage.getItem('userLevelProgress');
    if (value !== null) {
      const level = parseInt(value, 10);
      return level;
    }
  } catch (error) {
    console.error('Error retrieving level progress:', error);
  }
  return null; // default return if no value found or error
};
