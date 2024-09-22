import { View, StyleSheet, Alert, Text } from 'react-native'
import React, { useState } from 'react'
import TabTop from '../components/TabTop'
import { SceneMap } from 'react-native-tab-view';
import Test from '../components/Test';
import ModalConfirm from '../components/modals/ModalConfirm';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

const Tests = () => {
  const navigation:any = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedId, setSelectedId] = useState<any>(null);

  const handleStart = (id: number | string) => {
    // console.log('start clicked', id);
    setSelectedId(id);
    setModalVisible(true);
  };

  const handleConfirm = () => {
    // console.log('OK Pressed', selectedId
    setModalVisible(false);
    navigation.navigate('Instructions',  { id: selectedId });
  };

  const routes = [
    { key: 'ssc_cgl', title: 'SSC CGL' },
    { key: 'ssc_chsl', title: 'SSC CHSL' },
    { key: 'ssc_je_ce', title: 'SSC JE CE' },
    { key: 'ssc_je_ee', title: 'SSC JE EE' },
    { key: 'ssc_je_me', title: 'SSC JE ME' },
    { key: 'ssc_sa', title: 'SSC SA' },
    { key: 'ssc_mts', title: 'SSC MTS' },
    { key: 'ssc_cpo', title: 'SSC CPO' },
  ]
  const SSC_CGL = () => <Test data={testData} handleStart={handleStart} />;
  const SSC_CHSL = () => <View style={{ flex: 1, backgroundColor: '#673ab7' }} />;
  const SSC_JE_CE = () => <View style={{ flex: 1, backgroundColor: 'gray' }} />;
  const SSC_JE_EE = () => <View style={{ flex: 1, backgroundColor: 'gray' }} />;
  const SSC_JE_ME = () => <View style={{ flex: 1, backgroundColor: 'gray' }} />;
  const SSC_SA = () => <View style={{ flex: 1, backgroundColor: 'gray' }} />;
  const SSC_MTS = () => <View style={{ flex: 1, backgroundColor: 'gray' }} />;
  const SSC_CPO = () => <View style={{ flex: 1, backgroundColor: 'gray' }} />;

  const renderScene = SceneMap({
    ssc_cgl: SSC_CGL,
    ssc_chsl: SSC_CHSL,
    ssc_je_ce: SSC_JE_CE,
    ssc_je_ee: SSC_JE_EE,
    ssc_je_me: SSC_JE_ME,
    ssc_sa: SSC_SA,
    ssc_mts: SSC_MTS,
    ssc_cpo: SSC_CPO,
  });

  const testData = [
    { id: 1, title: 'SSC CGL Math Quiz', questions: 90, duration: 90, marks: 90, subject: 'QUANT' },
    { id: 2, title: 'SSC CGL Math Quiz', questions: 90, duration: 90, marks: 90, subject: 'REASONING' },
    { id: 3, title: 'SSC CGL Math Quiz', questions: 90, duration: 90, marks: 90, subject: 'GK' },
    { id: 4, title: 'SSC CGL Math Quiz', questions: 90, duration: 90, marks: 90, subject: 'QUANT' },
    { id: 5, title: 'SSC CGL Math Quiz', questions: 90, duration: 90, marks: 90, subject: 'ENGLISH' },
    { id: 6, title: 'SSC CGL Math Quiz', questions: 90, duration: 90, marks: 90, subject: 'QUANT' },
    { id: 7, title: 'SSC CGL Math Quiz', questions: 90, duration: 90, marks: 90, subject: 'ENGLISH' },
  ]


  return (
    <View style={styles.container}>
      <TabTop renderScene={renderScene} route={routes} />
      <View>
        <ModalConfirm
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onConfirm={handleConfirm}
          title='Ready to start ?'
          message={
            <Text>
              Pay 20 <FontAwesome5 name="coins" size={14} color="#d3af37" /> Conins
            </Text>
          }
          confirmActionText='Start'
          closeActionText='Not now'
        />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Tests