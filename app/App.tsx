import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import UserList from './components/UserList';

export default function App() {

  const store = configureStore();
  
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <UserList></UserList>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
