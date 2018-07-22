import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';

registerScreens(); 

Navigation.startSingleScreenApp({
    screen: {
      screen: 'AwesomeProject.StartScreen', // unique ID registered with Navigation.registerScreen
      title: 'Welcome', // title of the screen as appears in the nav 
    }});