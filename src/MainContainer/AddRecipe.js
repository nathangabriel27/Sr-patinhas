import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

export default class AddRecipe extends React.Component {
  render() {
    return (
      <View style={styles.tabBar}>
        <View>
          <TouchableOpacity onPress={() => this.BackToDashboard()} >
            <Text style={styles.BackToDashboard}>Voltar</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => this.AddRecipe()} >
            <Text> Adicionar Receita</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  BackToDashboard() {
    Actions.dashboard();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonAddRecipe: {
    color: "white",
    fontSize: 20,
    borderColor: 'white',
    borderWidth: 1,
    padding: 25,
    borderRadius: 2,
    textAlign: 'center',
    margin: 10,

    backgroundColor: '#72B5A4'
  },
  tabBar: {
    color: "white",
    fontSize: 25,
    borderWidth: 1,
    padding: 25,
    borderRadius: 25,
    textAlign: 'center',
    margin: 10,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#72B5A4'

  },
  BackToDashboard:{
    color: "white",
    fontSize: 20,
    borderColor: 'white',
    borderWidth: 1,
    padding: 10,
    borderRadius: 2,
    textAlign: 'center',

    backgroundColor: '#72B5A4'
  }
});