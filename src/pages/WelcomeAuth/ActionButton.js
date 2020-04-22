import React from 'react';
import {View, Text} from 'react-native';
import {colors} from '../../utils';
import {Button} from '../../components';
const ActionButton = ({desc, title, onPress}) => {
  return (
    <View style={styles.component}>
      <Text style={styles.text.desc}>{desc}</Text>
      <Button title={title} onPress={onPress} />
    </View>
  );
};
const styles = {
  wrapper: {
    component: {
      marginBottom: 43,
      width: 225,
    },
  },
  text: {
    desc: {
      fontSize: 10,
      maxWidth: 225,
      color: colors.text.default,
      textAlign: 'center',
      paddingHorizontal: '15%',
      marginBottom: 6,
    },
  },
};

export default ActionButton;
