import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Icon, Pressable, withTheme } from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';

const HeaderBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme, navigation } = props;

  return (
    <View
      style={StyleSheet.applyWidth(
        StyleSheet.compose(
          GlobalStyles.ViewStyles(theme)['screen header view'],
          { marginRight: 48 }
        ),
        dimensions.width
      )}
    >
      {/* Back */}
      <Pressable
        onPress={() => {
          try {
            navigation.goBack();
          } catch (err) {
            console.error(err);
          }
        }}
      >
        <View
          style={StyleSheet.applyWidth(
            GlobalStyles.ViewStyles(theme)['header action'],
            dimensions.width
          )}
        >
          <Icon name={'Feather/chevron-left'} size={28} />
        </View>
      </Pressable>
      {/* Screen heading */}
      <Text
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
            flex: 1,
            fontFamily: 'Inter_500Medium',
            fontSize: 19,
            textAlign: 'center',
          }),
          dimensions.width
        )}
      >
        {'Edit profile'}
      </Text>
    </View>
  );
};

export default withTheme(HeaderBlock);
