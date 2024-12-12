import {MainScreen} from './main';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Levels} from './levels';
import {Game} from './game';

export const AllStack = createNativeStackNavigator();

export const AllScreens = () => {
  return (
    <>
      <AllStack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={'Main'}>
        <AllStack.Screen name="Main" component={MainScreen} />
        <AllStack.Screen name="Levels" component={Levels} />
        <AllStack.Screen name="Game" component={Game} />
      </AllStack.Navigator>
    </>
  );
};
