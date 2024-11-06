import { NavigationContainer } from '@react-navigation/native';
import Screens from './navigation/Screens';
import "./global.css"
import { Provider } from 'react-redux';
import { store } from './services/redux/store';
import AuthProvider from './modules/auth/context/AuthProvider';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetProvider } from './context/BottomSheetContext';

export default function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <NavigationContainer>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <BottomSheetProvider>
              <Screens />
            </BottomSheetProvider>
          </GestureHandlerRootView>
        </NavigationContainer>
      </AuthProvider>
    </Provider>
  );
}
