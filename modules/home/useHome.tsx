import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useCallback, useRef } from "react";

const useHome = () => {
 const bottomSheetModalRef = useRef<BottomSheetModal>(null);
 const handlePresentModalPress = useCallback((data:any) => {
  bottomSheetModalRef.current?.present();
 }, []);
 const handleSheetChanges = useCallback((index: number) => {
  console.log('handleSheetChanges', index);
 }, []);

 return {bottomSheetModalRef, handlePresentModalPress, handleSheetChanges}
}

export default useHome
