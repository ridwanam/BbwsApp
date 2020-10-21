import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export const PrimaryButton = (props) => {
  return (
    <View>
      <TouchableOpacity onPress={props.onButtonPress}>
        <View style={styles.btnPrimary}>
          <Text style={styles.btnPrimaryText}>Button</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export const SecondaryButton = () => {
  return (
    <View>
      <View style={styles.btnSecondary}>
        <Text style={styles.btnSecondaryText}>Edit Profile</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btnPrimary: {
    backgroundColor: '#6fcf97',
    width: 220,
    height: 46,
    borderRadius: 220 / 2,
    justifyContent: 'center',
  },

  btnPrimaryText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  btnSecondary: {
    backgroundColor: '#ffffff',
    width: 200,
    height: 36,
    paddingVertical: 14,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
  },

  btnSecondaryText: {
    color: '#242424',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
