import React from 'react';
import {View, Text} from 'react-native';
import {Input} from '../../components/atoms';
import {colors} from '../../utils';
const Register = () => {
  return (
    <View style={styles.wrapper.page}>
      <View style={styles.wrapper.iconBack} />
      <View style={styles.wrapper.illustration} />
      <Text style={styles.text.decs}>
        Mohon mengisi beberapa data untuk proses data anda
      </Text>
      <View style={styles.space(64)} />
      <Input placeholder="Nama Lengkap" />
      <View style={styles.space(33)} />
      <Input placeholder="Email" />
      <View style={styles.space(33)} />
      <Input placeholder="Password" />
    </View>
  );
};

const styles = {
  wrapper: {
    page: {padding: 20},
    iconBack: {width: 25, height: 25, backgroundColor: 'yellow'},
    illustration: {
      width: 106,
      height: 115,
      backgroundColor: 'purple',
      marginTop: 8,
    },
  },
  text: {
    decs: {
      fontSize: 14,
      fontWeight: 'bold',
      color: colors.default,
      marginTop: 16,
      maxWidth: 200,
    },
  },
  space: value => {
    return {
      height: value,
    };
  },
};

export default Register;
