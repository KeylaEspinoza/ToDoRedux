/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import configureStore from './src/Store';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import AllToDo from './src/components/AllToDo';
import AddToDo from './src/components/AddToDo';

const App = () => {
  const store = configureStore();

  return (
    <Provider store={store}>
      <View>
        <Text style={{fontSize: 25}}>To Do</Text>
        <AddToDo />
        <AllToDo />
      </View>
    </Provider>
  );
};

export default App;
