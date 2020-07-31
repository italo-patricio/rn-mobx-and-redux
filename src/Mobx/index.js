import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Counter from '../shared/component';
import {CounterStore} from './store';
import { observer, inject } from 'mobx-react/native';

const store = new CounterStore();


const Mobx = () => {
  return (
    <View style={styles.container}>
      <Counter increment={store.increment} decrement={store.decrement}>
        <Text>{store.count}</Text>
      </Counter>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100%',
  },
});

export default Mobx;
