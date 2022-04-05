import { memo } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { PropTypes } from 'prop-types';
import useResponsiveStyles from '../../hooks/responsiveStyle';

const ButtonLink = ({ callback, label, style }) => {
  const styles = useResponsiveStyles(responsiveStyle);

  return (
    <TouchableOpacity style={[styles.link, style]} onPress={callback}>
      <Text style={styles.linkLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

const responsiveStyle = {
  link: {
    color: '#8ab4f8',
    textDecorationLine: 'underline',
  },

  linkLabel: { color: '#8ab4f8' },
};

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
