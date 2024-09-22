import React, { useState } from 'react';
import { View, useWindowDimensions, StyleSheet, Text, Dimensions } from 'react-native';
import { TabView,  TabBar } from 'react-native-tab-view';
const { width } = Dimensions.get('window');

const TabTop:React.FC<{renderScene:any, route:any}> = ({renderScene, route}) => {
 const layout = useWindowDimensions();
 const [index, setIndex] = useState(0);
 const [routes] = useState([...route])

 const renderTabBar = (props: any) => (
  <TabBar
   {...props}
   style={styles.tabBar}
   indicatorStyle={styles.indicator}
   labelStyle={styles.label}
   scrollEnabled={true}
   tabStyle={styles.tabStyle}
  />
 );

 return (
  <TabView
   navigationState={{ index, routes }}
   onIndexChange={setIndex}
   renderScene={renderScene}
   renderTabBar={renderTabBar}
   initialLayout={{ width: layout.width }}
  />
 );
}

const styles = StyleSheet.create({
 tabBar: {
  backgroundColor: '#fff',
  elevation: 2,
  justifyContent: 'center'
 },
 indicator: {
  backgroundColor: '#3b82f6',
 },
 label: {
  fontWeight: 'bold',
  color: '#3b82f6',
 },
 tabStyle: {
  // width: width / 3,
  width:'auto',
  justifyContent: 'center',
  display: 'flex',
  alignItems: 'center'
 },
});

export default TabTop;
