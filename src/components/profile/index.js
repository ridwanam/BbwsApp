import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {SecondaryButton} from '../button/';

class Index extends Component {
  render() {
    return (
      <View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../../assets/images/a.jpg')}
            style={styles.profile}
          />

          <View style={{flexDirection: 'column'}}>
            <Text style={styles.h1}>Ridwan Ahmad Ma'arif</Text>
            <Text style={{marginBottom: 10}}>UI/UX Developer</Text>
            <SecondaryButton />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  profile: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 16,
    marginEnd: 16,
  },
  h1: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Index;
