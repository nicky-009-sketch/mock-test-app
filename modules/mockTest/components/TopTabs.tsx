import React from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';

interface ITabViewTopPropsType {
 routes: any,
 index: number,
 setIndex: any,
}

const TabViewTop: React.FC<ITabViewTopPropsType> = (props) => {
 const { routes, index, setIndex } = props
 const layout = useWindowDimensions();

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
  routes.length !== 0 &&
  <TabView
   navigationState={{ index, routes }}
   onIndexChange={(index) => {
    setIndex(index);
   }}
   renderScene={() => null}
   renderTabBar={renderTabBar}
   initialLayout={{ width: layout.width }}
  />
 );
};

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
  width: 'auto',
 },
});

export default TabViewTop;
