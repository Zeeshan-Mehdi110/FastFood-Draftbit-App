import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Pressable,
  RadioButtonGroup,
  RadioButtonRow,
  withTheme,
} from '@draftbit/ui';
import { Image, View, useWindowDimensions } from 'react-native';

const LangBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  const [radioButtonGroupValue, setRadioButtonGroupValue] =
    React.useState(undefined);

  return (
    <RadioButtonGroup
      onValueChange={newRadioButtonGroupValue => {
        const radioButtonGroupValue = newRadioButtonGroupValue;
        try {
          setRadioButtonGroupValue(radioButtonGroupValue);
        } catch (err) {
          console.error(err);
        }
      }}
      value={radioButtonGroupValue}
    >
      <Pressable>
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
            },
            dimensions.width
          )}
        >
          {/* Flag Image */}
          <Image
            resizeMode={'cover'}
            source={Images.Flag}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'], {
                height: 22,
                width: 32,
              }),
              dimensions.width
            )}
          />
          {/* Language */}
          <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
            <RadioButtonRow
              color={theme.colors['Custom Color_3']}
              label={'English'}
              style={StyleSheet.applyWidth(
                { fontFamily: 'Inter_400Regular', fontSize: 16, marginLeft: 0 },
                dimensions.width
              )}
              unselectedColor={theme.colors.primary}
            />
          </View>
        </View>
      </Pressable>
    </RadioButtonGroup>
  );
};

export default withTheme(LangBlock);
