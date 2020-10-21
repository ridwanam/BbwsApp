import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Cart = (props) => {
  return (
    <View>
      <View
        style={{
          width: 40,
          height: 40,
          borderRadius: 20,
          backgroundColor: '#acacac',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 16,
        }}>
        <Text>{props.quantity}</Text>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
