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

const SaBlock = props => {
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
      {/* Addresses */}
      <View
        style={StyleSheet.applyWidth(
          { marginTop: 10, padding: 20 },
          dimensions.width
        )}
      >
        {/* Current address */}
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
              source={Images.Gps}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'], {
                  height: 24,
                  width: 24,
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
                {'Current address'}
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
                {'Doyers str. 206'}
              </Text>
            </View>
            <RadioButton
              color={theme.colors['Custom Color_3']}
              selectedIcon={'Ionicons/md-checkmark-circle-sharp'}
              size={24}
              unselectedColor={theme.colors.primary}
              unselectedIcon={'MaterialCommunityIcons/blank'}
              value={1}
            />
          </View>
        </Pressable>
        {/* Home */}
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
              source={Images.Location}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'], {
                  height: 24,
                  width: 24,
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
                {'Home\n'}
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
                {'NYC, Broadway ave 79'}
              </Text>
            </View>
            <RadioButton
              color={theme.colors['Custom Color_3']}
              selectedIcon={'Ionicons/md-checkmark-circle-sharp'}
              size={24}
              unselectedColor={theme.colors.primary}
              unselectedIcon={'MaterialCommunityIcons/blank'}
              value={2}
            />
          </View>
        </Pressable>
        {/* Work */}
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
              source={Images.Location}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'], {
                  height: 24,
                  width: 24,
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
                {'Work'}
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
                {'St. Mark’s Place Business Plaza 18'}
              </Text>
            </View>
            <RadioButton
              color={theme.colors['Custom Color_3']}
              selectedIcon={'Ionicons/md-checkmark-circle-sharp'}
              size={24}
              unselectedColor={theme.colors.primary}
              unselectedIcon={'MaterialCommunityIcons/blank'}
              value={3}
            />
          </View>
        </Pressable>
        {/* Park Avenue 15 */}
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
              source={Images.Location}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'], {
                  height: 24,
                  width: 24,
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
                {'Park Avenue 15'}
              </Text>
            </View>
            <RadioButton
              color={theme.colors['Custom Color_3']}
              selectedIcon={'Ionicons/md-checkmark-circle-sharp'}
              size={24}
              unselectedColor={theme.colors.primary}
              unselectedIcon={'MaterialCommunityIcons/blank'}
              value={4}
            />
          </View>
        </Pressable>
        {/* Washington str. 58/105 */}
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
              source={Images.Location}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'], {
                  height: 24,
                  width: 24,
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
                {'Washington str. 58/105'}
              </Text>
            </View>
            <RadioButton
              color={theme.colors['Custom Color_3']}
              selectedIcon={'Ionicons/md-checkmark-circle-sharp'}
              size={24}
              unselectedColor={theme.colors.primary}
              unselectedIcon={'MaterialCommunityIcons/blank'}
              value={5}
            />
          </View>
        </Pressable>
      </View>
    </RadioButtonGroup>
  );
};

export default withTheme(SaBlock);
