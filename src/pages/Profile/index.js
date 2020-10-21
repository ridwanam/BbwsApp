import React from 'react';
import {View} from 'react-native';
import {PrimaryButton} from '../../components/button';
import Profile from '../../components/profile';
import PositionReactNative from '../../components/menu/PositionReactNative';

const ProfilePages = () => {
  return (
    <View style={{paddingHorizontal: 16}}>
      <Profile />
      <PositionReactNative />
    </View>
  );
};

export default ProfilePages;
