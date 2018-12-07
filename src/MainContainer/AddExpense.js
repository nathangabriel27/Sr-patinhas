import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

export default class AddExpense extends React.Component {
  render() {
    return (
      <View>
        <View style={styles.tabBar}>
          <TouchableOpacity onPress={() => this.AddExpense()} >
            <Text style={styles.textNewRecipe}> Nova Despesa </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.RegisterRecipe}>
          <TouchableOpacity onPress={() => this.AddRecipe()} >
            <Text> Valo: </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text> Descrição: </Text>
          </TouchableOpacity>

        </View>
        <View>
          <TouchableOpacity onPress={() => this.BackToDashboard()} >
            <Text style={styles.BackToDashboard}>Voltar</Text>
          </TouchableOpacity>
          <TouchableOpacity >
            <Text style={styles.ConfirmRecipe}>Confirmar</Text>
          </TouchableOpacity>
          <TouchableOpacity >
            <Text stile={styles.admob}>Espaço para propaganda</Text>
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