import { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { PropTypes } from 'prop-types';

let styles;

const PageView = ({ style, children }) => (
  <View style={[styles.container, style]}>{children}</View>
);

styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDFA',
    padding: 30,
  },
});

PageView.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  style: PropTypes.number,
};

PageView.defaultProps = {
  style: 0,
};

export default memo(PageView);
