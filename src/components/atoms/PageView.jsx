import { memo } from 'react';
import { View } from 'react-native';
import { PropTypes } from 'prop-types';
import useResponsiveStyles from '../../hooks/responsiveStyle';

const PageView = ({ style, children }) => {
  const styles = useResponsiveStyles(responsiveStyle);

  return <View style={[styles.container, style]}>{children}</View>;
};

const responsiveStyle = {
  container: {
    flex: 1,
    backgroundColor: '#FFFDFA',
    padding: 30,
  },
};

PageView.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  style: PropTypes.number,
};

PageView.defaultProps = {
  style: 0,
};

export default memo(PageView);
