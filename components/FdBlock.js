import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { TextInput, withTheme } from '@draftbit/ui';
import { Text, View, useWindowDimensions } from 'react-native';

const FdBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <View style={StyleSheet.applyWidth({ marginTop: 20 }, dimensions.width)}>
      <Text
        style={StyleSheet.applyWidth(
          StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
            fontFamily: 'Inter_400Regular',
            opacity: 0.7,
          }),
          dimensions.width
        )}
      >
        {'Name'}
      </Text>
      <TextInput
        autoCapitalize={'none'}
        onChangeText={newTextInputValue => {
          const textInputValue = newTextInputValue;
          try {
            setTextInputValue(textInputValue);
          } catch (err) {
            console.error(err);
          }
        }}
        placeholder={'Enter your name'}
        placeholderTextColor={theme.colors['Light']}
        selectionColor={theme.colors['Primary']}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.TextInputStyles(theme)['Text Input'],
            {
              fontFamily: 'Inter_400Regular',
              height: 48,
              marginTop: 10,
              paddingLeft: 16,
              paddingRight: 16,
            }
          ),
          dimensions.width
        )}
        value={textInputValue}
      />
    </View>
  );
};

export default withTheme(FdBlock);
