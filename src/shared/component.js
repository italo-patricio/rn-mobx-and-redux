import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Button} from 'react-native';
import PropTypes from 'prop-types';

const Counter = (props) => {
  return (
    <>
      <View style={styles.containerCount}>
        <Button title="Decrementar" onPress={props.decrement} color="red" />
        <Text style={styles.textDiplay}>{props.children}</Text>
        <Button title="Incrementar" onPress={props.increment} />
      </View>
    </>
  );
};

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  containerCount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textDiplay: {
    paddingHorizontal: 20,
  },
});

export default Counter;
