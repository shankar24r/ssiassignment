import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {setUserInformation} from '../util/LocalStorage';
import sampleJson from '../util/sampleData.json';

const {width} = Dimensions.get('window');

const Home = () => {
  useEffect(() => {
    setUserInformation('logged_in', '1');
    return () => {};
  }, []);

  const itemrenderData = ({item, index}) => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={{
          flex: 1,
          flexDirection: 'row',
          height: 170,
          width: width - 20,
          margin: 3,
          backgroundColor: 'white',
          borderRadius: 8,
          elevation: 5,
        }}>
        <View style={{flex: 0.4, justifyContent: 'center', padding: 10}}>
          <Image
            style={{height: 150, resizeMode: 'contain'}}
            source={{uri: item.imgurl}}
          />
        </View>
        <View style={{flex: 0.6, padding: 10}}>
          <View style={{flex: 0.4}}>
            <Text numberOfLines={3} style={{fontWeight: '600'}}>
              {item.shortdiscription}
            </Text>
          </View>
          <View style={{flex: 0.4, marginTop: 5}}>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#E82424'}}>
              Rs.{item.offerprice}/-
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontWeight: '600',
                color: '#838383',
                textDecorationLine: 'line-through',
                textDecorationStyle: 'solid',
              }}>
              Rs.{item.Price}/-
            </Text>
            <Text style={{fontSize: 14, fontWeight: '600', color: '#626262'}}>
              Savings: Rs.{item.yoursavings}/-
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={sampleJson}
        renderItem={itemrenderData}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
