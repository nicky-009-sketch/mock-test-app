import storageProvider from "./storageProvider"
const sp = new storageProvider();

export default class storageModel {

  setTokenToLocal = async (value: string): Promise<void> => {
    sp.setStorage('userToken', value);
  }

  setSelectedExamToLocal = async (value: string): Promise<void> => {
    sp.setStorage('selectedExam', JSON?.stringify(value));
  }

  getTokenFromLocal = async (): Promise<any> => {
    const response = await sp.getStorage('userToken')
    return response;
  }

  getSelectedExamFromLocal = async (): Promise<any> => {
    const response = await sp.getStorage('selectedExam')
    return JSON?.parse(response);
  }

  removeTokenFromLocal = async (): Promise<void> => {
    await sp.removeStorage('userToken')
  }

} 