import { memo } from 'react';
import { PropTypes } from 'prop-types';
import { Input as RNEInput } from 'react-native-elements';
import useResponsiveStyles from '../../hooks/responsiveStyle';

const Input = ({ style, placeholder, isSecureText, setText }) => {
  const styles = useResponsiveStyles(responsiveStyle);

  return (
    <RNEInput
      style={[styles.input, style]}
      containerStyle={styles.container}
      placeholder={placeholder}
      placeholderTextColor="#0000008a"
      secureTextEntry={isSecureText}
      onChangeText={(text) => setText(text)}
    />
  );
};

const responsiveStyle = {
  container: {
    // paddingHorizontal: -10,
  },

  input: {
    paddingTop: 9,
    paddingHorizontal: 12,
    paddingBottom: 11,
  },
};

Input.propTypes = {
  style: PropTypes.number,
  placeholder: PropTypes.string,
  isSecureText: PropTypes.bool,
  setText: PropTypes.func.isRequired,
};

Input.defaultProps = {
  style: 0,
  placeholder: '',
  isSecureText: false,
};

export default memo(Input);
