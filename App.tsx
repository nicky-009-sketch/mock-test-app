import { NavigationContainer } from '@react-navigation/native';
import Screens from './navigation/Screens';
import "./global.css"
import { Provider } from 'react-redux';
import { store } from './services/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Screens />
      </NavigationContainer>
    </Provider>
  );
}
