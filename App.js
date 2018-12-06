import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity>
          <Text>App.js dentro de SRC</Text>

        </TouchableOpacity>

      </View>
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
