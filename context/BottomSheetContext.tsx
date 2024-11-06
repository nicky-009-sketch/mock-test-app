import React, { createContext, useRef, useContext, ReactNode } from 'react';
import { BottomSheetModalProvider, BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';
import { Text } from 'react-native';

interface BottomSheetContextType {
 openBottomSheet: (component: ReactNode) => void;
 closeBottomSheet: () => void;
}
interface BottomSheetProviderProps {
 children: ReactNode;
}


const BottomSheetContext = createContext<BottomSheetContextType | null>(null);
export const useBottomSheet = () => {
 const context = useContext(BottomSheetContext);
 if (!context) {
  throw new Error('useBottomSheet must be used within a BottomSheetProvider');
 }
 return context;
};

export const BottomSheetProvider: React.FC<BottomSheetProviderProps> = ({ children }) => {
 const bottomSheetRef = useRef<BottomSheetModal>(null);
 const [sheetContent, setSheetContent] = React.useState<ReactNode>(null);

 const openBottomSheet = (component: ReactNode) => {
  setSheetContent(component);
  bottomSheetRef.current?.present();
 };

 const closeBottomSheet = () => {
  bottomSheetRef.current?.dismiss();
 };

 return (
  <BottomSheetContext.Provider value={{ openBottomSheet, closeBottomSheet }}>
   <BottomSheetModalProvider>
    {children}
    <BottomSheetModal
     ref={bottomSheetRef}
     snapPoints={["50%", "50%", "90%"]}
    >
     <BottomSheetView style={{ padding: 20 }}>
      {/* <Text>Awesome 🎉</Text> */}
      {sheetContent}
     </BottomSheetView>
    </BottomSheetModal>
   </BottomSheetModalProvider>
  </BottomSheetContext.Provider>
 );
};
