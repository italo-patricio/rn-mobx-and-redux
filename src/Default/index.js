import React, {useState} from 'react';
import {Text, View, StyleSheet, Alert} from 'react-native';
import Counter from '../shared/component';

const DefaultState = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  const decrement = () => setCount(count - 1);
  return (
    <>
      <ShowStateValue count={count} />
      <View style={styles.container}>
        <Counter increment={increment} decrement={decrement}>
          <Text>{count}</Text>
        </Counter>
      </View>
    </>
  );
};

const ShowStateValue = (props) => {
  Alert.alert('renderizou!', 'show state');
  return <Text>{props.count}</Text>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100%',
  },
});

export default DefaultState;
