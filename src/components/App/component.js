import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
  Alert,
  TouchableHighlight,
} from 'react-native';

export default class App extends React.Component {
  state = {
    count: 0,
  };

  increment = () => this.setState({count: this.state.count + 1});

  decrement = () => this.setState({count: this.state.count - 1});

  render() {
    return (
      <>
        <SafeAreaView>
          <View style={styles.container}>
            <View style={styles.containerCount}>
              <Button
                title="Decrementar"
                onPress={this.decrement}
                color="red"
              />
              <Text style={styles.textDiplay}>{this.state.count}</Text>
              <Button title="Incrementar" onPress={this.increment} />
            </View>
          </View>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100%',
  },
  containerCount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textDiplay: {
    paddingHorizontal: 20,
  },
});
