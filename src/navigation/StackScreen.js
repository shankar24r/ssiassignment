import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Login from '../screens/Login';
import Home from '../screens/Home';
import CustomDrawer from './CustomDrawer';
import Profile from '../screens/Profile';
import CommonHeader from '../components/CommonHeader';

const AuthStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const AuthStackScreen = ({}) => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
    </AuthStack.Navigator>
  );
};

const HomeStackScreen = ({navigation}) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: true,
          header: () => (
            <CommonHeader
              onClick={() => navigation.openDrawer()}
              name="Product list"
            />
          ),
        }}
      />
      <HomeStack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: true,
          header: () => (
            <CommonHeader
              onClick={() => navigation.openDrawer()}
              name="Profile page"
            />
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};

const DrawerScreen = ({}) => {
  return (
    // <Drawer.Navigator
    //   // drawerContent={props => <CustomDrawer {...props} />}
    //   initialRouteName="DrawerScreen">
    //   <Drawer.Screen
    //     name="DrawerScreen"
    //     component={HomeStackScreen}
    //   />
    // </Drawer.Navigator>
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="DrawerScreen"
        component={HomeStackScreen}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export {AuthStackScreen, HomeStackScreen, DrawerScreen};
