import { NavigationContainer } from '@react-navigation/native';
import Screens from './navigation/Screens';
import "./global.css"
import { Provider } from 'react-redux';
import { store } from './services/redux/store';
import AuthProvider from './modules/auth/context/AuthProvider';

export default function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <NavigationContainer>
          <Screens />
        </NavigationContainer>
      </AuthProvider>
    </Provider>
  );
}
