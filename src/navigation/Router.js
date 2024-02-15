import React, {useEffect, useMemo, useReducer, useState} from 'react';
import {Text, Alert} from 'react-native';
import reducers from '../store/reducers';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import {NavigationContainer} from '@react-navigation/native';
import {AppContext} from './AppContext';
import {
  InitialState,
  NavigationReducer,
} from '../store/reducers/NavigationReducer';
import BootSplash from 'react-native-bootsplash';
import {AuthStackScreen, DrawerScreen, HomeStackScreen} from './StackScreen';
import {getUserInformation} from '../util/LocalStorage';

export const store = createStore(reducers);

const Router = () => {
  const [state, dispatch] = useReducer(NavigationReducer, InitialState); // Getting State in reducer

  useEffect(() => {
    BootSplash.hide({fade: true}).then(() => {
      getUserInformation('logged_in').then(res => {
        if (res === null) {
        } else if (res === '1') {
          dispatch({type: 'Home', payload: '1'});
        }
      });
    });
  }, []);

  const authContextValue = useMemo(() => ({
    Auth: () => {
      dispatch({type: 'Authentication', payload: ''});
    },
    HomeLoad: () => {
      dispatch({type: 'Home', payload: '1'});
    },
  }));

  const chooseStack = state => {
    console.log('State', state);
    if (state === null || state === '') {
      return <AuthStackScreen />;
    } else if (state === '1') {
      return <DrawerScreen />;
    } else {
      return <AuthStackScreen />;
    }
  };

  return (
    <AppContext.Provider value={authContextValue}>
      <Provider store={store}>
        <NavigationContainer>
          {chooseStack(state.userToken)}
        </NavigationContainer>
      </Provider>
    </AppContext.Provider>
  );
};

export default Router;
