/* eslint-disable react-native/no-inline-styles */
// Vector Icons
import React from 'react';
import BackArrowIcon from 'react-native-vector-icons/AntDesign';
import DrawerRightIcon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MenuIcon from 'react-native-vector-icons/Feather';

const BackArrow = <BackArrowIcon name={'arrowleft'} color={'#000'} size={25} />;

const DrawerRight = <DrawerRightIcon name={'right'} color={'#000'} size={20} />;

const LogoutIcon = <Ionicons name="exit-outline" size={22} color={'#000'} />;

const MenuImage = <MenuIcon name={'menu'} color={'#fff'} size={25} />;

export default {
  BackArrow,
  DrawerRight,
  LogoutIcon,
  MenuImage,
};
