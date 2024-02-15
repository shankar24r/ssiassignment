import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {AppContext} from '../navigation/AppContext';
import FastImage from 'react-native-fast-image';
import Images from '../components/Images';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import auth from '@react-native-firebase/auth';
import {snackBar} from '../util/helper';
import CommonLoader from '../components/CommonLoader';
import LinearGradient from 'react-native-linear-gradient';

const Login = () => {
  const {HomeLoad} = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [currentState, setCurrentState] = useState(1);
  const [loading, setLoading] = useState(false);

  const loginProcess = () => {
    if (email == '') {
      snackBar('Please enter email');
    } else if (password == '') {
      snackBar('Please enter password');
    } else if (password.length < 6) {
      snackBar('Password should be at least 6 characters');
    } else {
      if (currentState == 1) {
        setLoading(true);
        auth()
          .signInWithEmailAndPassword(email, password)
          .then(() => {
            setLoading(false);
            setTimeout(() => {
              snackBar('User account  signed in!');
              HomeLoad();
            }, 500);
          })
          .catch(error => {
            setLoading(false);
            setTimeout(() => {
              if (error.code === 'auth/invalid-credential') {
                snackBar('That email address does not exist!');
              }
              if (error.code === 'auth/invalid-email') {
                snackBar('That email address is invalid!');
              }
              if (error.code === 'auth/too-many-requests') {
                snackBar('Too many requests, please wait some times');
              }
            }, 1000);
          });
      } else {
        setLoading(true);
        auth()
          .createUserWithEmailAndPassword(email, password)
          .then(() => {
            setLoading(false);
            setTimeout(() => {
              snackBar('User account created');
              HomeLoad();
            }, 500);
          })
          .catch(error => {
            setLoading(false);
            setTimeout(() => {
              if (error.code === 'auth/email-already-in-use') {
                snackBar('That email address is already in use!');
              }
              if (error.code === 'auth/invalid-email') {
                snackBar('That email address is invalid!');
              }
            }, 1000);
          });
      }
    }
  };

  const switchTap = key => {
    if (key == 1) {
      setCurrentState(1);
      setEmail('');
      setPassword('');
    } else if (key == 2) {
      setCurrentState(2);
      setEmail('');
      setPassword('');
    }
  };

  return (
    <LinearGradient colors={['#ffffff', '#0081bb']} style={styles.container}>
      <CommonLoader loading={loading} />
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps={'always'}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.topView}>
          <FastImage
            style={styles.LogoImage}
            source={Images.whiteLogo}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
        <View style={styles.bottomView}>
          <View style={styles.switchButton}>
            <TouchableOpacity
              style={[styles.tabView, {opacity: currentState == 1 ? 1 : 0.5}]}
              onPress={() => switchTap(1)}>
              <Text style={[styles.loginText]}>{'Login'}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tabView, {opacity: currentState == 2 ? 1 : 0.5}]}
              onPress={() => switchTap(2)}>
              <Text style={[styles.loginText]}>{'Register'}</Text>
            </TouchableOpacity>
          </View>
          <TextInput
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            placeholder="Enter email"
            placeholderTextColor="#fff"
            autoCapitalize="none"
            cursorColor={'#fff'}
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.email}
          />
          <View>
            <TextInput
              keyboardType="default"
              underlineColorAndroid="transparent"
              placeholder="Enter password"
              placeholderTextColor="#fff"
              secureTextEntry={true}
              autoCapitalize="none"
              cursorColor={'#fff'}
              value={password}
              onChangeText={text => setPassword(text)}
              style={[styles.email, {marginTop: 20}]}
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={loginProcess}>
            <Text style={styles.loginButtonText}>
              {currentState == 1 ? 'Login' : 'Register'}
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </LinearGradient>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topView: {
    flex: 0.25,
  },
  bottomView: {
    flex: 0.75,
    paddingHorizontal: 40,
  },
  LogoImage: {width: 200, height: 200, alignSelf: 'center'},
  email: {
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    color: '#fff',
  },
  button: {
    height: 50,
    width: 110,
    backgroundColor: '#fff',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  loginText: {
    fontSize: 20,
    fontWeight: '800',
    textAlign: 'center',
    color: '#fff',
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: '800',
    textAlign: 'center',
    color: '#0081bb',
  },
  switchButton: {
    flexDirection: 'row',
    height: 45,
    width: 250,
    alignSelf: 'center',
    marginBottom: 20,
  },
  tabView: {
    flex: 0.5,
    backgroundColor: '#0081bb',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
