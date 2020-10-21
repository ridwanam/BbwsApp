import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PrimaryButton} from '../../components/button';
import Cart from '../../components/Cart';

const StateDinamis = () => {
  const [totalProduct, setTotalProduct] = useState(0);
  return (
    <View>
      <Cart quantity={totalProduct} />
      <PrimaryButton onButtonPress={() => setTotalProduct(totalProduct + 1)} />
    </View>
  );
};

export default StateDinamis;

const styles = StyleSheet.create({});
