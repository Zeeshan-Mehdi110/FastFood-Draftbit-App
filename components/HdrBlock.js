import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { withTheme } from '@draftbit/ui';
import { Text, useWindowDimensions } from 'react-native';

const HdrBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  return (
    <Text
      style={StyleSheet.applyWidth(
        StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
          fontFamily: 'Inter_500Medium',
          fontSize: 21,
          paddingBottom: 8,
          paddingTop: 8,
          textAlign: 'center',
        }),
        dimensions.width
      )}
    >
      {'Orders'}
    </Text>
  );
};

export default withTheme(HdrBlock);
