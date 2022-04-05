import { memo } from 'react';
import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { PropTypes } from 'prop-types';
import useResponsiveStyles from '../../hooks/responsiveStyle';

const Button = ({ callback, label, style, hasLoading, isLoading }) => {
  const styles = useResponsiveStyles(responsiveStyle);

  return (
    <TouchableOpacity style={[styles.button, style]} onPress={callback}>
      {hasLoading && isLoading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={styles.buttonLabel}>{label}</Text>
      )}
    </TouchableOpacity>
  );
};

const responsiveStyle = {
  button: {
    width: '100%',
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#772ce8',
  },

  buttonLabel: { color: 'white' },
};

Button.propTypes = {
  callback: PropTypes.func.isRequired,
  label: PropTypes.string,
  style: PropTypes.number,
  hasLoading: PropTypes.bool,
  isLoading: PropTypes.bool,
};

Button.defaultProps = {
  label: '',
  style: 0,
  hasLoading: false,
  isLoading: false,
};

export default memo(Button);
