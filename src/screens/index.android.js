import {Navigation} from 'react-native-navigation';
import StratScreen from './StratScreen';

export function registerScreens() {
    Navigation.registerComponent('AwesomeProject.StratScreen', () => StratScreen);
   
  }