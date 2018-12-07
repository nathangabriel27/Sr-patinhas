import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { Actions } from 'react-native-router-flux';

import firebase from 'firebase';

import Router from './Router';

export default class App extends React.Component {
  render() {
    return (
      <Router></Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
