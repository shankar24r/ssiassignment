import {View, Text, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import FastImage from 'react-native-fast-image';
import Images from '../components/Images';
import {useDispatch, useSelector} from 'react-redux';
import {removeItemValue} from '../util/LocalStorage';
import auth from '@react-native-firebase/auth';
import {useContext} from 'react';
import {AppContext} from './AppContext';
import {LogoutCall} from '../store/actions/profileAction';

const FlatListData = [
  {
    id: 1,
    title: 'Product list',
  },
  {
    id: 2,
    title: 'Profile page',
  },
];

const CustomDrawer = props => {
  const {Auth} = useContext(AppContext);
  const dispatch = useDispatch();
  const recentName = useSelector(state => state?.profileReducer?.currentName);

  const clickAction = async item => {
    props.navigation.closeDrawer();
    if (item.id == 1) {
      props.navigation.navigate('Home');
    } else if (item.id == 2) {
      props.navigation.navigate('Profile');
    }
  };

  const signOut = () => {
    Alert.alert('Sign Out', 'Are you sure?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          auth()
            .signOut()
            .then(() => {
              removeItemValue('logged_in');
              Auth();
              dispatch(LogoutCall());
            });
        },
      },
    ]);
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.topView}>
        <FastImage source={Images.userAvatar} style={styles.userAvatar} />
        <Text numberOfLines={1} style={styles.nameText}>
          {recentName == '' ? 'safe start' : recentName}
        </Text>
      </View>
      <View style={styles.menuZone}>
        {FlatListData.map((item, index) => {
          return (
            <TouchableOpacity
              key={item.id}
              activeOpacity={0.7}
              style={styles.flatListParentView}
              onPress={() => clickAction(item)}>
              <View style={{justifyContent: 'center'}}>
                <Text numberOfLines={1} style={styles.tabTitle}>
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={styles.bottomZone}>
        <TouchableOpacity onPress={signOut}>
          <View style={styles.logoutView}>
            <Text style={styles.signOutText}>Sign Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  userAvatar: {
    height: 67.5,
    width: 67.5,
    borderRadius: 40,
    marginBottom: 10,
  },
  topView: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0081bb',
    height: 150,
  },
  nameText: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 5,
  },
  menuZone: {flex: 1, backgroundColor: '#fff', paddingTop: 10},
  bottomZone: {padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'},
  logoutView: {flexDirection: 'row', alignItems: 'center'},
  signOutText: {
    fontSize: 15,
    marginLeft: 5,
    color: '#000',
  },
  flatListParentView: {
    height: 50,
    flexDirection: 'row',
    paddingVertical: '10@vs',
    borderBottomWidth: 0.6,
    borderBottomColor: '#000',
    paddingHorizontal: 20,
  },
  tabTitle: {
    fontSize: 15,
    color: '#000',
  },
});
