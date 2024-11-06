import { Text, StyleSheet } from 'react-native';
import React, { useMemo } from 'react';
import  { BottomSheetModal, BottomSheetModalProvider, BottomSheetView } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

interface IModalBottomPropsType{
 handleSheetChanges:any;
 bottomSheetModalRef:any;
}

const ModalBottom: React.FC<IModalBottomPropsType> = (props) => {
 const { handleSheetChanges, bottomSheetModalRef } = props;
 const snapPoints = useMemo(() => ["25%", "50%", "90%"], []);

 return (
  <BottomSheetModalProvider>
   <GestureHandlerRootView style={styles.container}>
   
    <BottomSheetModal
     ref={bottomSheetModalRef}
     onChange={handleSheetChanges}
     snapPoints={snapPoints}
    >
     <BottomSheetView style={styles.contentContainer}>
      <Text>Awesome 🎉</Text>
     </BottomSheetView>
    </BottomSheetModal>
   </GestureHandlerRootView>
  </BottomSheetModalProvider>
 );
};

const styles = StyleSheet.create({
 container: {
  flex: 1,
  padding: 24,
  justifyContent: 'center',
  backgroundColor: 'grey',
 },
 contentContainer: {
  flex: 1,
  alignItems: 'center',
 },
});

export default ModalBottom;
