import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

class PositionReactNative extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notifCount: 2,
    };
    console.log('==> constructor');
  }

  componentDidMount(props) {
    // setTimeout(() => {
    //   this.setState({
    //     notifCount: 4,
    //   });
    // }, 2000);
  }

  componentDidUpdate() {
    console.log('==> Update');
  }

  render() {
    return (
      <View
        style={{
          marginTop: 16,
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
        }}>
        <View style={[{alignItems: 'center'}, styles.IconWrapper]}>
          <View>
            <Image
              source={require('../../assets/icon/procura-logo.png')}
              style={styles.iconWrapper}
            />
            <View style={styles.notifiWrapper}>
              <Text style={styles.notifText}>{this.state.notifCount}</Text>
            </View>
          </View>
          <Text>Transaksi</Text>
        </View>
        <View style={[{alignItems: 'center'}, styles.IconWrapper]}>
          <Image
            source={require('../../assets/icon/procura-logo.png')}
            style={styles.iconWrapper}
          />
          <Text>Riwayat</Text>
        </View>
        <View style={[{alignItems: 'center'}, styles.IconWrapper]}>
          <Image
            source={require('../../assets/icon/procura-logo.png')}
            style={styles.iconWrapper}
          />
          <Text>Vocherku</Text>
        </View>
        <View style={[{alignItems: 'center'}, styles.IconWrapper]}>
          <Image
            source={require('../../assets/icon/procura-logo.png')}
            style={styles.iconWrapper}
          />
          <Text>Pengaturan</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  notifiWrapper: {
    backgroundColor: '#424242',
    width: 18,
    height: 18,
    borderRadius: 9,
    justifyContent: 'center',
    right: 0,
    top: 0,
    position: 'absolute',
  },
  notifText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 11,
  },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginBottom: 10,
    marginRight: 10,
    position: 'relative',
  },
  IconWrapper: {
    marginHorizontal: 10,
  },
});

export default PositionReactNative;
