/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { StackNavigator } from 'react-navigation';
import Main from './src/main';

const App = StackNavigator({
    Main: { screen: Main },
    Points: { screen: Main }
});

export default App;
