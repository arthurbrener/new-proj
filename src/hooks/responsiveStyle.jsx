import { useState, useEffect } from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';

const useResponsiveStyles = (responsiveStyle) => {
  const layout = useWindowDimensions();
  const [style, setStyle] = useState({});

  useEffect(() => {
    setStyle(createResponsiveStyle(responsiveStyle)(layout));
  }, [layout]);

  return style;
};

const createResponsiveStyle = (responsiveStyle) => (layout) => {
  const webStyle = StyleSheet.create(responsiveStyle.web || responsiveStyle);
  const mobileStyle = StyleSheet.create(responsiveStyle.mobile || responsiveStyle);

  if (layout.width < 768) {
    return mobileStyle;
  }
  return webStyle;
};

export default useResponsiveStyles;
