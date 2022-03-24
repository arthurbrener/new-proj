import { StyleSheet, View } from 'react-native';
import { PropTypes } from 'prop-types';
import Button from '../atoms/Button';

let styles;

const Form = ({ children, containerStyle, buttonLabel, callback }) => (
  <View style={containerStyle}>
    {children}
    <Button callback={callback} label={buttonLabel} style={styles.button} />
  </View>
);

styles = StyleSheet.create({
  button: { marginTop: 40 },
});

Form.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  containerStyle: PropTypes.number,
  buttonLabel: PropTypes.string,
  callback: PropTypes.func.isRequired,
};

Form.defaultProps = {
  containerStyle: 0,
  buttonLabel: '',
};

export default Form;
