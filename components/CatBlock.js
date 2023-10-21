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

const CatBlock = props => {
  const dimensions = useWindowDimensions();
  const { theme } = props;

  return (
    <View>
      {/* Header */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 12,
            paddingBottom: 0,
          },
          dimensions.width
        )}
      >
        <Text
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
              fontFamily: 'Inter_500Medium',
              fontSize: 18,
            }),
            dimensions.width
          )}
        >
          {'Top categories'}
        </Text>

        <Pressable>
          <Text
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'], {
                color: theme.colors['Light'],
                fontFamily: 'Inter_400Regular',
              }),
              dimensions.width
            )}
          >
            {'View all'}
          </Text>
        </Pressable>
      </View>

      <ExampleDataApi.FetchUsersGET count={5}>
        {({ loading, error, data, refetchUsers }) => {
          const fetchData = data?.json;
          if (loading) {
            return <ActivityIndicator />;
          }

          if (error || data?.status < 200 || data?.status >= 300) {
            return <ActivityIndicator />;
          }

          return (
            <FlashList
              data={fetchData}
              estimatedItemSize={50}
              horizontal={true}
              keyExtractor={flashListData =>
                flashListData?.id ||
                flashListData?.uuid ||
                JSON.stringify(flashListData)
              }
              listKey={'VpVlmWyg'}
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
                          borderColor: theme.colors['Light'],
                          borderRadius: 20,
                          borderWidth: 1,
                          flexDirection: 'row',
                          height: 40,
                          justifyContent: 'center',
                          marginLeft: 6,
                          marginTop: 12,
                          paddingLeft: 12,
                          paddingRight: 12,
                        },
                        dimensions.width
                      )}
                    >
                      <Image
                        resizeMode={'cover'}
                        source={Images.Taco}
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.ImageStyles(theme)['Image'],
                            { height: 32, width: 32 }
                          ),
                          dimensions.width
                        )}
                      />
                      <Text
                        style={StyleSheet.applyWidth(
                          StyleSheet.compose(
                            GlobalStyles.TextStyles(theme)['Text'],
                            { fontFamily: 'Inter_500Medium', marginLeft: 4 }
                          ),
                          dimensions.width
                        )}
                      >
                        {'Vegan'}
                      </Text>
                    </View>
                  </Pressable>
                );
              }}
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={true}
            />
          );
        }}
      </ExampleDataApi.FetchUsersGET>
    </View>
  );
};

export default withTheme(CatBlock);
