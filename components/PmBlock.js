import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import {
  Pressable,
  RadioButton,
  RadioButtonGroup,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View, useWindowDimensions } from 'react-native';

const PmBlock = props => {
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
      {/* Payment methods */}
      <View
        style={StyleSheet.applyWidth(
          { marginTop: 20, padding: 20 },
          dimensions.width
        )}
      >
        {/* Payoneer */}
        <Pressable>
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                height: 50,
                justifyContent: 'space-between',
              },
              dimensions.width
            )}
          >
            {/* Menu Icon */}
            <Image
              resizeMode={'cover'}
              source={Images.Payoneer}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'], {
                  height: 22,
                  width: 32,
                }),
                dimensions.width
              )}
            />
            {/* Details */}
            <View
              style={StyleSheet.applyWidth(
                { flex: 1, paddingLeft: 16, paddingRight: 16 },
                dimensions.width
              )}
            >
              {/* title */}
              <Text
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                    fontFamily: 'Inter_500Medium',
                    fontSize: 16,
                  }),
                  dimensions.width
                )}
              >
                {'Payoneer'}
              </Text>
              {/* ~ value */}
              <Text
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                    fontFamily: 'Inter_300Light',
                    fontSize: 12,
                    marginTop: 4,
                    opacity: 0.6,
                  }),
                  dimensions.width
                )}
              >
                {'Mastercard **** 7890'}
              </Text>
            </View>
            <RadioButton
              color={theme.colors['Custom Color_3']}
              size={24}
              unselectedColor={theme.colors['Divider']}
              value={1}
            />
          </View>
        </Pressable>
        {/* Transfer wise */}
        <Pressable
          style={StyleSheet.applyWidth({ marginTop: 14 }, dimensions.width)}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                height: 50,
                justifyContent: 'space-between',
              },
              dimensions.width
            )}
          >
            {/* Menu Icon */}
            <Image
              resizeMode={'cover'}
              source={Images.TransferWise}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'], {
                  height: 22,
                  width: 32,
                }),
                dimensions.width
              )}
            />
            {/* Details */}
            <View
              style={StyleSheet.applyWidth(
                { flex: 1, paddingLeft: 16, paddingRight: 16 },
                dimensions.width
              )}
            >
              {/* title */}
              <Text
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                    fontFamily: 'Inter_500Medium',
                    fontSize: 16,
                  }),
                  dimensions.width
                )}
              >
                {'Transfer wise'}
              </Text>
              {/* ~ value */}
              <Text
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                    fontFamily: 'Inter_300Light',
                    fontSize: 12,
                    marginTop: 4,
                    opacity: 0.6,
                  }),
                  dimensions.width
                )}
              >
                {'Visa card **** 7890'}
              </Text>
            </View>
            <RadioButton
              color={theme.colors['Custom Color_3']}
              size={24}
              unselectedColor={theme.colors['Divider']}
              value={2}
            />
          </View>
        </Pressable>
        {/* Cash */}
        <Pressable
          style={StyleSheet.applyWidth({ marginTop: 14 }, dimensions.width)}
        >
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                height: 50,
                justifyContent: 'space-between',
              },
              dimensions.width
            )}
          >
            {/* Menu Icon */}
            <Image
              resizeMode={'cover'}
              source={Images.Cash}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'], {
                  height: 22,
                  width: 32,
                }),
                dimensions.width
              )}
            />
            {/* Details */}
            <View
              style={StyleSheet.applyWidth(
                { flex: 1, paddingLeft: 16, paddingRight: 16 },
                dimensions.width
              )}
            >
              {/* title */}
              <Text
                style={StyleSheet.applyWidth(
                  StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                    fontFamily: 'Inter_500Medium',
                    fontSize: 16,
                  }),
                  dimensions.width
                )}
              >
                {'Cash'}
              </Text>
            </View>
            <RadioButton
              color={theme.colors['Custom Color_3']}
              size={24}
              unselectedColor={theme.colors['Divider']}
              value={3}
            />
          </View>
        </Pressable>
      </View>
    </RadioButtonGroup>
  );
};

export default withTheme(PmBlock);
