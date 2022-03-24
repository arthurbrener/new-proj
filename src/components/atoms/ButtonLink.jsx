import { memo } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { PropTypes } from 'prop-types';

let styles;

const ButtonLink = ({ callback, label, style }) => (
  <TouchableOpacity style={[styles.link, style]} onPress={callback}>
    <Text style={styles.linkLabel}>{label}</Text>
  </TouchableOpacity>
);

styles = StyleSheet.create({
  link: {
    color: '#8ab4f8',
    textDecorationLine: 'underline',
  },

  linkLabel: { color: '#8ab4f8' },
});

ButtonLink.propTypes = {
  callback: PropTypes.func.isRequired,
  label: PropTypes.string,
  style: PropTypes.number,
};

ButtonLink.defaultProps = {
  label: '',
  style: 0,
};

export default memo(ButtonLink);
