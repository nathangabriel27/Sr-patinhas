import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { Actions } from 'react-native-router-flux';

import firebase from 'firebase';

import Router from './Router';

export default class App extends React.Component {

  componentWillMount() {

    //Posso Fazer qualquer tipo de configuração global aqui como por exemplo o Firebase
    if (firebase.apps.length === 0) {
      firebase.initializeApp({
        apiKey: "AIzaSyB47-TJZOSJTdAKYEoJstRK3L9vyqFDQ3w",
        authDomain: "sr-patinhas.firebaseapp.com",
        databaseURL: "https://sr-patinhas.firebaseio.com",
        projectId: "sr-patinhas",
        storageBucket: "sr-patinhas.appspot.com",
        messagingSenderId: "571604912958"
      })
    }
  }

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
