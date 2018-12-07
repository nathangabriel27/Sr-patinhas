import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
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
            <Text style={styles.textNewRecipe}> Nova Despesa</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.RegisterRecipe}>
          <View >
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
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={() => this.askRegisterNewRecipe()}>
            <Text style={styles.ConfirmRecipe}>Confirmar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.BackToDashboard()} >
            <Text style={styles.BackToDashboard}>Voltar</Text>
          </TouchableOpacity>
          <View style={styles.ad}>
          <TouchableOpacity>
            <Text style={styles.admob}>  Espaço para propaganda </Text>
          </TouchableOpacity>
        </View>
        </View>

      </View>
    );
  }
  // Metodos e funções

  BackToDashboard() {
    Actions.dashboard();
  }

  askRegisterNewRecipe() {
    Alert.alert(
      'Nova Despesa',
      'Confirma a nova despesa ?',
      [
        { text: 'Cancelar', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        {
          text: 'OK', onPress: () =>
            this.registerNewRecipe()
        },
      ],
      { cancelable: false }
    )
  }

  registerNewRecipe() {
    const placeData = {
      value: this.state.value,
      description: this.state.description,

    }

    firebase.database().ref("Recipes/")
      .push(placeData)
      .then((snapshot) => {
        const placeId = snapshot.key;
        firebase.database().ref("Recipes/" + placeId)
          .update({
            uid: placeId
          })
        Alert.alert("Sucesso", "Nova despesa cadastrada!");
      })
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
    backgroundColor: '#CB3234'
  },
  tabBar: {
    color: "white",
    fontSize: 20,
    padding: 100,
    borderRadius: 2,
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#CB3234',

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
    backgroundColor: '#2271B3'
  },
  ConfirmRecipe: {
    color: "white",
    fontSize: 20,
    borderColor: 'white',
    borderWidth: 1,
    padding: 10,
    borderRadius: 2,
    textAlign: 'center',

    backgroundColor: '#CB3234'
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
  ad: {
    fontSize: 20,
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center',

  },
  inputStyle: {
    fontSize: 30,
    color: 'green'
  }
});