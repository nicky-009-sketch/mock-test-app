import AsyncStorage from "@react-native-async-storage/async-storage";

export default class storageProvider {

 setStorage = async (name: string, value: string): Promise<any> => {
  await AsyncStorage.setItem(name, value);
 }

 getStorage = async (name: string): Promise<any> => {
  return await AsyncStorage.getItem(name)
 }

 removeStorage = async (name: string): Promise<any> => {
  await AsyncStorage.removeItem(name);
 }

}