import { AppRegistry } from 'react-native';
import App from './src/App';

AppRegistry.registerComponent('rnWeb', () => App);
AppRegistry.runApplication('rnWeb', {
  rootTag: document.getElementById('root'),
});