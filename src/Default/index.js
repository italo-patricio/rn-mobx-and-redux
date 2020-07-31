import React, {Component} from 'react';
import {Text, View, SafeAreaView, StyleSheet, Alert} from 'react-native';
import Counter from '../shared/component';

export default class DefaultState extends Component {
  state = {
    count: 0,
  };

  increment = () => this.setState({count: this.state.count + 1});

  decrement = () => this.setState({count: this.state.count - 1});

  render() {
    Alert.alert('renderizou!');
    return (
      <>
        <SafeAreaView>
          <View style={styles.container}>
            <Counter increment={this.increment} decrement={this.decrement}>
              <Text>{this.state.count}</Text>
            </Counter>
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
});
