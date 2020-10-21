import React from 'react';
import {View} from 'react-native';
import {PrimaryButton} from './components/button';
import ProfilePages from './pages/Profile';
import PropsDinamis from './pages/PropsDinamis';
import StateDinamis from './pages/StateDinamis';
import ReactNativeSvg from './pages/ReactNativeSvg';
import CallAPIVanilla from './pages/CallAPIVanilla';

const App = () => {
  return (
    <View style={{paddingHorizontal: 16, paddingVertical: 16}}>
      {/* <ProfilePages /> */}
      {/* <PropsDinamis /> */}
      {/* <StateDinamis /> */}
      {/* <ReactNativeSvg /> */}
      <CallAPIVanilla />
    </View>
  );
};

export default App;
