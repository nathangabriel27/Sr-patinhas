import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

export default class Dashboard extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <ImageBackground style={styles.backgroundStyle} source={require('../../assets/splash2.png')}/>
        <View>
          <TouchableOpacity onPress={() => this.AddRecipe()} >
            <Text style={styles.buttonAddRecipe}>Receita</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => this.AddExpense()} >
            <Text style={styles.buttonAddExpense}>Despesas</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => this.Balance()} >
            <Text style={styles.buttonAddExpense}>Saldos</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  AddRecipe() {
    Actions.addRecipe();
  }
  AddExpense() {
    Actions.addExpense();
  }

  Balance() {
    Actions.balance();
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonAddExpense: {
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
   backgroundStyle:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
  }

});