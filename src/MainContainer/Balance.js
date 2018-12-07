import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, FlatList, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
import _ from "lodash";

export default class AddRecipe extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // deviceWidth: width,
            // deviceHeight: height,
            value: "",
            description: "",
            placesData: []
        };
    }

    render() {
        return (
            <View>
                <View style={styles.tabBar}>
                    <TouchableOpacity>
                        <Text style={styles.textNewRecipe}> Saldos</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.RegisterRecipe}>
                    <View >
                        <Text style={styles.titleRecipe}> Receitas.</Text>
                        <ScrollView>
                            <FlatList
                                data={this.state.placesData}
                                renderItem={({ item }) => this.renderRecipes(item)} />

                        </ScrollView>
                        <Text style={styles.titleExpense}> Despesas </Text>
                        <ScrollView>
                            <FlatList
                                data={this.state.placesData}
                                renderItem={({ item }) => this.renderExpenses(item)} />
                        </ScrollView>
                    </View>
                </View>
                <View>
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

    componentDidMount() {
        this.searchRecipes();
    }

    searchRecipes() {
        firebase.database().ref("Recipes")
            .once("value")
            .then((snapshot) => {
                const placesValues = _.values(snapshot.val());
                this.setState({ placesData: placesValues });
            })
    }
    searchExpenses() {
        firebase.database().ref("Expenses")
            .once("value")
            .then((snapshot) => {
                const placesValues = _.values(snapshot.val());
                this.setState({ placesData: placesValues });
            })
    }
    renderRecipes(item) {
        return (
            <TouchableOpacity style={styles.rowView} >
                <Text>R$ {item.value} - </Text>
                <Text>{item.description}</Text>
            </TouchableOpacity>
        )
    }
    renderExpenses(item) {
        return (
            <TouchableOpacity style={styles.rowView} >
                <Text>R$ {item.value} - </Text>
                <Text>{item.description}</Text>
            </TouchableOpacity>
        )
    }





    // Metodos e funções

    BackToDashboard() {
        Actions.dashboard();
    }

    askRegisterNewRecipe() {
        Alert.alert(
            'Nova receita',
            'Confirma o seu registo de receita ?',
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
                Alert.alert("Sucesso", "Nova receita cadastrada!");
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
        backgroundColor: '#72B5A4'
    },
    tabBar: {
        color: "white",
        fontSize: 20,
        padding: 50,
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
    ad: {
        fontSize: 20,
        textAlign: 'center',
        justifyContent: 'center',
        alignContent: 'center',

    },
    inputStyle: {
        fontSize: 30,
        color: 'green'
    },
    rowView: {
        flex: 1,
        flexDirection: 'row'
    },
    titleRecipe: {
        fontSize: 20,
        color: 'green'
    },
    titleExpense: {
        fontSize: 20,
        color: 'red'
    }
});