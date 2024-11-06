import { StyleSheet, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { TabBar, TabView } from 'react-native-tab-view';

const TopTabView: React.FC<any> = ({ routes, renderScene, handleTabChange }) => {
 const layout = useWindowDimensions();
 const [index, setIndex] = useState(0);
 const renderTabBar = (props: any) => (
  <TabBar
   {...props}
   style={styles.tabBar}
   indicatorStyle={styles.indicator}
   labelStyle={styles.label}
   tabStyle={[styles.tabStyle, { width: 'auto' }]}
   scrollEnabled={true}
  />
 );
 return (
  routes &&
  <TabView
   navigationState={{ index, routes }}
   onIndexChange={(index) => {
    setIndex(index);
    handleTabChange(routes[index].key);
   }}
   renderScene={renderScene}
   initialLayout={{ width: layout.width }}
   renderTabBar={renderTabBar}
  />
 )
}

const styles = StyleSheet.create({
 tabBar: {
  backgroundColor: '#fff',
  elevation: 2,
  justifyContent: 'center',
 },
 indicator: {
  backgroundColor:'red'

 },
 label: {
  fontWeight: 'bold',
  color:'gray'
 },
 tabStyle: {
  justifyContent: 'center',
  display: 'flex',
  alignItems: 'center',
 },
});


export default TopTabView