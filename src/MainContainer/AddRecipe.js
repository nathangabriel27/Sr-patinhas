import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

export default class AddRecipe extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // deviceWidth: width,
      // deviceHeight: height,
      value: "",
      description: "",

    };
  }

  render() {
    return (
      <View>
        <View style={styles.tabBar}>
          <TouchableOpacity>
            <Text style={styles.textNewRecipe}> Nova Receita</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.RegisterRecipe}>
          <TouchableOpacity >
            <Text> Valor : </Text>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(text) => this.setState({ value: text })}
              placeholder="R$  "
              value={this.state.value}
            />
            <Text> Descrição: </Text>
            <TextInput
              style={styles.inputStyle}
              onChangeText={(text) => this.setState({ description: text })}
              placeholder="Descrição: "
              value={this.state.description}
            />

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
    borderRadius: 2,
    textAlign: 'center',
    margin: 10,

    backgroundColor: '#72B5A4'
  },
  tabBar: {
    color: "white",
    fontSize: 20,
    padding: 100,
    borderRadius: 2,
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#72B5A4',

  },
  BackToDashboard: {
    color: "white",
    backgroundColor: "red",
    fontSize: 20,
    borderColor: 'white',
    borderWidth: 1,
    padding: 10,
    borderRadius: 2,
    textAlign: 'center',
    backgroundColor: '#72B5A4'
  },
  ConfirmRecipe: {
    color: "white",
    fontSize: 20,
    borderColor: 'white',
    borderWidth: 1,
    padding: 10,
    borderRadius: 2,
    textAlign: 'center',

    backgroundColor: '#72B5A4'
  },
  RegisterRecipe: {
    color: "white",
    fontSize: 20,
    padding: 100,


  },
  textNewRecipe: {
    fontSize: 40,
    color: 'white'
  },
  admob: {
    fontSize: 40,
    color: "black"
  },
  inputStyle: {
    fontSize: 30,
    color: 'green'
  }
});