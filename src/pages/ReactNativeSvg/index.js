import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Illustration from '../../components/illustration/chatting'; //svg to component
import Illustration2 from '../../assets/images/undraw_Chatting_re_j55r.svg'; //svg file

const ReactNativeSvg = () => {
  return (
    <View style={styles.container}>
      <Text style={{textAlign: 'center'}}>
        Materi Menggunakan File SVG React Native
      </Text>
      <View style={{alignItems: 'center'}}>
        <Illustration width={325} height={225} style={{marginVertical: 16}} />
        <Illustration2 width={325} height={225} />
      </View>
    </View>
  );
};

export default ReactNativeSvg;

const styles = StyleSheet.create({
  container: {padding: 18},
});
