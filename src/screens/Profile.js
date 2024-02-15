import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {nameDetails} from '../store/actions/profileAction';
import {snackBar} from '../util/helper';

const Profile = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');

  const textChange = () => {
    if (name == '') {
      snackBar('Name can not be empty..');
    } else {
      dispatch(nameDetails(name));
      snackBar('Name updated successfully..');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Change your name here</Text>
      <TextInput
        keyboardType="default"
        underlineColorAndroid="transparent"
        placeholder="Enter name"
        placeholderTextColor="#000"
        autoCapitalize="none"
        cursorColor={'#000'}
        value={name}
        onChangeText={text => setName(text)}
        style={styles.name}
      />
      <TouchableOpacity style={styles.button} onPress={textChange}>
        <Text style={styles.buttonText}>{'Change'}</Text>
      </TouchableOpacity>
      <Text style={styles.note}>
        {
          'Note:  Once you updated your name, it will reflect in side menu top zone by using Redux '
        }
      </Text>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  name: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    paddingHorizontal: 10,
    color: '#000',
    marginTop: 50,
  },
  button: {
    height: 50,
    width: 140,
    backgroundColor: '#0081bb',
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  note: {
    marginTop: 50,
    fontWeight: '500',
    fontSize: 15,
  },
});
