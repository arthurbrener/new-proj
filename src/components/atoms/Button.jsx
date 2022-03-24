import { memo } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { PropTypes } from 'prop-types';

let styles;

const Button = ({ callback, label, style }) => (
  <TouchableOpacity style={[styles.button, style]} onPress={callback}>
    <Text style={styles.buttonLabel}>{label}</Text>
  </TouchableOpacity>
);

styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },

  buttonLabel: { color: 'white' },
});

Button.propTypes = {
  callback: PropTypes.func.isRequired,
  label: PropTypes.string,
  style: PropTypes.number,
};

Button.defaultProps = {
  label: '',
  style: 0,
};

export default memo(Button);
