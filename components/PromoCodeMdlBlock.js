import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Button, TextInput, withTheme } from '@draftbit/ui';
import {
  KeyboardAvoidingView,
  Modal,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';

const PromoCodeMdlBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <Modal animationType={'slide'} transparent={true}>
      <View
        style={StyleSheet.applyWidth(
          {
            backgroundColor: theme.colors['Strong'],
            bottom: 0,
            flex: 1,
            left: 0,
            opacity: 0.25,
            position: 'absolute',
            right: 0,
            top: 0,
          },
          dimensions.width
        )}
      />
      <KeyboardAvoidingView
        behavior={'padding'}
        enabled={true}
        style={StyleSheet.applyWidth(
          { bottom: 0, left: 0, position: 'absolute', right: 0 },
          dimensions.width
        )}
      >
        {/* Promo code pop up */}
        <View
          style={StyleSheet.applyWidth(
            {
              backgroundColor: theme.colors['Custom Color'],
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              bottom: 0,
              flex: 1,
              left: 0,
              padding: 20,
              position: 'absolute',
              right: 0,
            },
            dimensions.width
          )}
        >
          {/* header */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 40,
              },
              dimensions.width
            )}
          >
            {/* heading */}
            <Text
              style={StyleSheet.applyWidth(
                StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                  flex: 1,
                  fontFamily: 'Inter_500Medium',
                  fontSize: 18,
                  textAlign: 'center',
                }),
                dimensions.width
              )}
            >
              {'Promo code'}
            </Text>
          </View>
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
            placeholder={'Enter promo code'}
            placeholderTextColor={theme.colors['Light']}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(
                GlobalStyles.TextInputStyles(theme)['Text Input'],
                {
                  borderRadius: 12,
                  fontFamily: 'Inter_400Regular',
                  height: 48,
                  paddingLeft: 16,
                  paddingRight: 16,
                }
              ),
              dimensions.width
            )}
            value={textInputValue}
          />
          {/* Actions */}
          <View
            style={StyleSheet.applyWidth(
              {
                flexDirection: 'column',
                justifyContent: 'space-between',
                paddingBottom: 20,
              },
              dimensions.width
            )}
          >
            {/* Apply */}
            <Button
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.ButtonStyles(theme)['Action button'],
                  {
                    backgroundColor: theme.colors['Custom Color_5'],
                    marginTop: 20,
                  }
                ),
                dimensions.width
              )}
              title={'Apply'}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default withTheme(PromoCodeMdlBlock);
