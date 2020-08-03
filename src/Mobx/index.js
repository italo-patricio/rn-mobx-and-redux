import React from 'react';
import {View, StyleSheet, Text, Alert} from 'react-native';
import Counter from '../shared/component';
// imports inject and observer from 'mobx-react':
import {inject, observer} from 'mobx-react';

import {Provider} from 'mobx-react';
import CounterMobxStore from './Mobx/store';

const Mobx = (props) => {
  Alert.alert('Renderizou', 'Mobx');
  const {count, increment, decrement} = props.store;
  return (
    <View style={styles.container}>
      <Counter increment={increment} decrement={decrement}>
        <Text>{count}</Text>
      </Counter>
    </View>
  );
};

const MobxRender = (props) => {
  const {count} = props.store;
  Alert.alert('Renderizou', 'MobxRender');
  return (
    <>
      <Provider store={CounterMobxStore}>
        <Text>Result count: `${count}`</Text>
        <Mobx />
      </Provider>
    </>
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

// inject Store as props to Mobx and make it observe changes in Store
export default inject('store')(observer(MobxRender));
