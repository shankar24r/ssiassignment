import {
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Vector from './Vector';

const CommonHeader = ({onClick, name = ''}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.firstFlex}>
        <TouchableOpacity style={styles.menu} onPress={onClick}>
          {Vector.MenuImage}
        </TouchableOpacity>
      </View>
      <View style={styles.secondFlex}>
        <Text style={styles.title}>{name}</Text>
      </View>
      <View style={styles.firstFlex}></View>
    </SafeAreaView>
  );
};

export default CommonHeader;

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: '#0081bb',
    flexDirection: 'row',
  },
  firstFlex: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondFlex: {
    flex: 0.6,
    alignItems: 'center',
    justifyContent: 'center',
  },

  menu: {alignItems: 'center'},
  title: {fontSize: 18, fontWeight: '600', color: '#fff'},
});
