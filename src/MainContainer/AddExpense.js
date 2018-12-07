import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

export default class AddExpense extends React.Component {
  render() {
    return (
      <View>
        <View>
          <TouchableOpacity onPress={() => this.BackToDashboard()} >
            <Text style={styles.buttonAddRecipe}>Voltar</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => this.AddRecipe()} >
            <Text> Adicionar Despesa</Text>
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
    borderRadius: 25,
    textAlign: 'center',
    margin: 10,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.45)'
  },
});