import { View } from 'react-native';
import { PropTypes } from 'prop-types';
import Button from '../atoms/Button';
import useResponsiveStyles from '../../hooks/responsiveStyle';

const Form = ({
  children,
  containerStyle,
  buttonLabel,
  callback,
  hasLoading,
  isLoading,
}) => {
  const styles = useResponsiveStyles(responsiveStyle);

  return (
    <View style={containerStyle}>
      {children}
      <Button
        callback={callback}
        label={buttonLabel}
        style={styles.button}
        hasLoading={hasLoading}
        isLoading={isLoading}
      />
    </View>
  );
};

const responsiveStyle = {
  button: { marginTop: 40 },
};

Form.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  containerStyle: PropTypes.number,
  buttonLabel: PropTypes.string,
  callback: PropTypes.func.isRequired,
  hasLoading: PropTypes.bool,
  isLoading: PropTypes.bool,
};

Form.defaultProps = {
  containerStyle: 0,
  buttonLabel: '',
  hasLoading: false,
  isLoading: false,
};

export default Form;
