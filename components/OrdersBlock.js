import React from 'react';
import * as GlobalStyles from '../GlobalStyles.js';
import * as ExampleDataApi from '../apis/ExampleDataApi.js';
import Images from '../config/Images';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import { Pressable, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import {
  ActivityIndicator,
  Image,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { Fetch } from 'react-request';

const OrdersBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  return (
    <View>
      {/* Food Items */}
      <ExampleDataApi.FetchUsersGET count={10}>
        {({ loading, error, data, refetchUsers }) => {
          const foodItemsData = data?.json;
          if (loading) {
            return <ActivityIndicator />;
          }

          if (error || data?.status < 200 || data?.status >= 300) {
            return <ActivityIndicator />;
          }

          return (
            <FlashList
              data={foodItemsData}
              estimatedItemSize={50}
              keyExtractor={flashListData =>
                flashListData?.id ||
                flashListData?.uuid ||
                JSON.stringify(flashListData)
              }
              listKey={'8aURo9an'}
              numColumns={1}
              onEndReachedThreshold={0.5}
              renderItem={({ item }) => {
                const flashListData = item;
                return (
                  <Pressable>
                    <View
                      style={StyleSheet.applyWidth(
                        {
                          alignItems: 'center',
                          borderBottomWidth: 2,
                          borderColor: theme.colors['Divider'],
                          flexDirection: 'row',
                          marginLeft: 20,
                          marginRight: 20,
                          paddingBottom: 15,
                          paddingTop: 15,
                        },
                        dimensions.width
                      )}
                    >
                      <Image
                        resizeMode={'cover'}
                        source={Images.Burger}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.ImageStyles(theme)['Image'],
                            { height: 70, width: 88 }
                          ),
                          dimensions.width
                        )}
                      />
                      <View
                        style={StyleSheet.applyWidth(
                          { flex: 1, paddingLeft: 16 },
                          dimensions.width
                        )}
                      >
                        <Text
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text'],
                              { fontFamily: 'Inter_500Medium', fontSize: 16 }
                            ),
                            dimensions.width
                          )}
                        >
                          {'Hamburger'}
                        </Text>

                        <Text
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text'],
                              {
                                color: theme.colors['Light'],
                                fontFamily: 'Inter_400Regular',
                                fontSize: 13,
                                marginTop: 4,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {'1 big tasty, 1 large french fries, 1 large drink'}
                        </Text>

                        <Text
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text'],
                              {
                                color: theme.colors['Custom Color_4'],
                                fontFamily: 'Inter_600SemiBold',
                                marginTop: 6,
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {'$4.80'}
                        </Text>
                      </View>
                    </View>
                  </Pressable>
                );
              }}
              showsHorizontalScrollIndicator={true}
              showsVerticalScrollIndicator={true}
              style={StyleSheet.applyWidth(
                GlobalStyles.FlashListStyles(theme)['FlashList'],
                dimensions.width,
                ['width', 'height', 'flexGrow']
              )}
              contentContainerStyle={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.FlashListStyles(theme)['FlashList'],
                  { flex: 0 }
                ),
                dimensions.width
              )}
            />
          );
        }}
      </ExampleDataApi.FetchUsersGET>
    </View>
  );
};

export default withTheme(OrdersBlock);
