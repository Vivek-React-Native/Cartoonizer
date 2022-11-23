import React, { useState } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { FontText } from '../Common';
import { Colors, Fonts, Images, Responsive, Strings } from '../Constants';

const HorizontalCard = ({ data }) => {
  const [Selected, setSelected] = useState(new Array(data.length).fill(false));

  return (
    <FlatList
      data={data}
      contentContainerStyle={{
        paddingLeft: Responsive.wp(3),
        paddingRight: Responsive.wp(1),
      }}
      keyExtractor={(v, index) => index.toString()}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      renderItem={({ item, index }) => (
        <View
          style={{
            borderWidth: 1,
            width: Responsive.wp(90),
            marginHorizontal: Responsive.wp(2),
            padding: Responsive.wp(1),
            borderRadius: 5,
            borderColor: Colors.k3954FA,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: Responsive.wp(1),
            }}>
            <FontText
              color={Colors.black}
              name={Fonts.Regular}
              size={Responsive.normalize(14)}>
              {Strings.ChoosePhoto.kStandardCombo}
            </FontText>

            <TouchableOpacity
              onPress={() => {
                const updated = Selected.map((v, i) => (index == i ? !v : v));
                setSelected(updated);
              }}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={
                  Selected[index] ? Images.img_selected : Images.img_unselected
                }
                resizeMode="cover"
                style={{
                  width: Responsive.wp(5),
                  height: Responsive.wp(5),
                  marginRight: Responsive.wp(2),
                }}
              />

              <FontText
                color={Colors.black}
                name={Fonts.Regular}
                size={Responsive.normalize(14)}>
                {Strings.ChoosePhoto.kIncludeoriginal}
              </FontText>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flex: 1,
              backgroundColor: Colors.white,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
            <View
              style={{
                flexWrap: 'wrap',
                width: Responsive.wp(22),
                height: Responsive.wp(22),
                borderWidth: 1,
                borderColor: Colors.k3E60FF,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {item.subImages.map((subItem, subIndex) => (
                <View key={subIndex}>
                  <Image
                    source={subItem}
                    resizeMode="cover"
                    style={{
                      width: Responsive.wp(10),
                      height: Responsive.wp(10),
                      marginLeft: Responsive.wp(0.2),
                    }}
                  />
                </View>
              ))}
            </View>
            <Image
              source={item.img_1}
              resizeMode="contain"
              style={{
                width: Responsive.wp(20),
                height: Responsive.wp(20),
              }}
            />
            <Image
              source={item.img_2}
              resizeMode="contain"
              style={{
                width: Responsive.wp(20),
                height: Responsive.wp(20),
              }}
            />
            <Image
              source={item.img_3}
              resizeMode="contain"
              style={{
                width: Responsive.wp(20),
                height: Responsive.wp(20),
              }}
            />
          </View>
        </View>
      )}
    />
  );
};

export default HorizontalCard;

const styles = StyleSheet.create({});
