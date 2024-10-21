import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
// import Onboarding from '../screens/Onboarding';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Components from '../screens/Components';
import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LeaderBoard from '../screens/LeaderBoard';
import Store from '../screens/Store';
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import Menu from './Menu';
import { Text, TouchableOpacity, View } from 'react-native';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import Tests from '../screens/Tests';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Instructions from '../screens/Instructions';
import CountDown from '../components/CountDown';
import HomeScreen from '../modules/home/HomeScreen';
import TestScreen from '../modules/mockTest/TestScreen';
import TestInstructions from '../modules/mockTest/TestInstructions';
import TestRoom from '../modules/mockTest/TestRoom';
import OnBoardingScreen from '../modules/auth/OnBoardingScreen';
import SignInScreen from '../modules/auth/SignInScreen';
import SignUpScreen from '../modules/auth/SignUpScreen';
import { useAuthProvider } from '../modules/auth/context/AuthProvider';
import SendOtpScreen from '../modules/auth/SendOtpScreen';

const Screens = () => {
 const {isAuthenticated} = useAuthProvider();
 const Stack = createStackNavigator();
 return (
  <Stack.Navigator>
   {!isAuthenticated ? (<>
    <Stack.Screen
     name='OnboardingScreen'
     component={OnBoardingScreen}
     options={{
      headerTransparent: true,
      headerShown: false
     }}
    />
    <Stack.Screen
     name='SendOtpScreen'
     component={SendOtpScreen}
     options={{
      headerTransparent: true,
      title: 'SendOtp'
     }}
    />
    <Stack.Screen
     name='SignInScreen'
     component={SignInScreen}
     options={{
      headerTransparent: true,
      title: 'SignIn'
     }}
    />
    <Stack.Screen
     name='SignUpScreen'
     component={SignUpScreen}
     options={{
      headerTransparent: true,
      title: 'SingUp'
     }}
    />
   </>
   ) : (
    <>
     <Stack.Screen
      name='App'
      component={AppStack}
      options={{
       headerShown: false
      }}
     />
     <Stack.Screen
      name='Instructions'
      component={Instructions}
     />
     <Stack.Screen
      name='TestInstructions'
      component={TestInstructions}
     />
     <Stack.Screen
      name='TestRoom'
      component={TestRoom}
      options={{
       headerShown: false
      }}
     />
    </>
   )}
  </Stack.Navigator>
 )
}
export default Screens


const AppStack = () => {
 const Drawer = createDrawerNavigator();
 return (
  <Drawer.Navigator
   drawerContent={
    (props) => <Menu
     {...props}
     profile={profile}
    />
   }
  >
   <Drawer.Screen
    name='BottomTab'
    component={BottomTabStack}
    options={({ navigation }) => ({
     drawerIcon: () => null,
     title: null,
     headerRight: () => {
      return (
       <TouchableOpacity
        onPress={() => {
         navigation.navigate('Store')
        }}
       >
        <View className='p-2'>
         <FontAwesome6
          name="sack-dollar"
          size={24}
          color="#d3af37"
         />
        </View>
       </TouchableOpacity>
      )
     },
    })}
   />
  </Drawer.Navigator>
 )
}

const profile = {
 image: "image",
 name: "Rachel Brown",
 email: 'rachelbrown@gmail.com'
};


const BottomTabStack = () => {
 const Tab = createBottomTabNavigator();
 return (
  <Tab.Navigator
   initialRouteName="Home"
   screenOptions={{
    tabBarStyle: {
     height: 56,
     padding: 6
    }
   }}
  >
   <Tab.Screen
    name='Home'
    component={Home}
    options={{
     headerShown: false,
     tabBarLabelStyle: {
      fontSize: 10,
      fontWeight: 800,
      marginBottom: 5
     },
     tabBarIcon: ({
      color,
      size
     }) => (
      <AntDesign
       name="home"
       color={color}
       size={size}
      />
     )
    }}
   />
   <Tab.Screen
    name='Test'
    component={TestScreen}
    options={{
     headerShown: false,
     tabBarLabelStyle: {
      fontSize: 10,
      fontWeight: 800,
      marginBottom: 5,
     },
     tabBarIcon: ({
      color,
      size
     }) => (
      <SimpleLineIcons
       name="notebook"
       size={22}
       color={color}
      />
     )
    }}
   />
   <Tab.Screen
    name='LeaderBoard'
    component={LeaderBoard}
    options={{
     headerShown: false,
     tabBarLabelStyle: {
      fontSize: 10,
      fontWeight: 800,
      marginBottom: 5,
     },
     tabBarIcon: ({
      color,
      size
     }) => (
      <Entypo
       name="line-graph"
       color={color}
       size={22}
      />
     )
    }}
   />
   <Tab.Screen
    name='Store'
    component={Store}
    options={{
     headerShown: false,
     tabBarLabelStyle: {
      fontSize: 10,
      fontWeight: 800,
      marginBottom: 5
     },
     tabBarIcon: ({
      color,
      size
     }) => (
      <AntDesign
       name="shoppingcart"
       color={color}
       size={size}
      />
     )
    }}
   />
  </Tab.Navigator>
 )
}

















// const AppStack = () => {
//  const Drawer = createDrawerNavigator();
//  return(
//   <Drawer.Navigator>
//    <Drawer.Screen name='Home' component={Home} />
//    {/* <Drawer.Screen name='Woman' component={Pro} />
//    <Drawer.Screen name='Man' component={Pro} />
//    <Drawer.Screen name='Kids' component={Pro} />
//    <Drawer.Screen name='New Collection' component={Pro} />
//    <Drawer.Screen name='Profile' component={ProfileStack} />
//    <Drawer.Screen name='Setting' component={SettingStack} />
//    <Drawer.Screen name='Component' component={ComponentStack} /> */}
//   </Drawer.Navigator>
//  )
// }

















const ProfileStack = () => {
 const Stack = createDrawerNavigator();
 return (
  <Stack.Navigator>
   <Stack.Screen name='profile' component={Profile} />
  </Stack.Navigator>
 )
}


const SettingStack = () => {
 const Stack = createDrawerNavigator();
 return (
  <Stack.Navigator>
   <Stack.Screen name='setting' component={SettingStack} />
  </Stack.Navigator>
 )
}

const ComponentStack = () => {
 const Stack = createDrawerNavigator();
 return (
  <Stack.Navigator>
   <Stack.Screen name='Components' component={Components} />
  </Stack.Navigator>
 )
}
