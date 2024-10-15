import { BottomSheetModal } from "@gorhom/bottom-sheet"
import { useCallback, useMemo, useRef, useState } from "react"

const useTestRoom = () => {
 const [language, setLanguage] = useState<string | null | undefined>('en')

 const onTimeOut = () => {
  console.log('useTestRoom')
 }
 const changeLaguage = (lang: string) => {
  setLanguage(lang)
 }

 const bottomSheetModalRef = useRef<BottomSheetModal>(null);
 const snapPoints = useMemo(() => ['25%', '50%'], []);
 const handleBottomSheet = useCallback(() => {
   bottomSheetModalRef.current?.present();
 }, []);

 const pagerRef: any = useRef(null);

 return { onTimeOut, language, changeLaguage, handleBottomSheet, pagerRef, bottomSheetModalRef, snapPoints  }
}

export default useTestRoom