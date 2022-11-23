import React from 'react';
import { FlatList, View } from 'react-native';
import { Card, Container, Header } from '../Common';
import { Colors, Images, Responsive } from '../Constants';
import { routeChoosePhoto } from './ChoosePhoto';
import { routeSetting } from './Setting';

export const routeHome = 'Home';

const Home = props => {
  const { navigation } = props;

  const data = [
    {
      MainImage: Images.img_cartoon_1,
      subImages: [
        Images.img_sub_1,
        Images.img_sub_2,
        Images.img_sub_3,
        Images.img_sub_4,
      ],
      Text: 'Standard',
    },
    {
      MainImage: Images.img_cartoon_2,
      subImages: [
        Images.img_sub_1,
        Images.img_sub_2,
        Images.img_sub_3,
        Images.img_sub_4,
      ],
      Text: '3D Cartoon',
    },
    {
      MainImage: Images.img_cartoon_1,
      subImages: [
        Images.img_sub_1,
        Images.img_sub_2,
        Images.img_sub_3,
        Images.img_sub_4,
      ],
      Text: 'Standard',
    },
    {
      MainImage: Images.img_cartoon_2,
      subImages: [
        Images.img_sub_1,
        Images.img_sub_2,
        Images.img_sub_3,
        Images.img_sub_4,
      ],
      Text: '3D Cartoon',
    },
  ];

  return (
    <Container Dark={true} backgroundColor={Colors.kF4FBFF}>
      <View
        style={{
          flex: 1,
          paddingTop: Responsive.hp(1),
          backgroundColor: Colors.kF4FBFF,
        }}>
        <Header
          title={'Home'}
          borderNeeded={true}
          titleColor={Colors.black}
          RightIcon={Images.img_user}
          RightPress={() => {
            navigation.navigate(routeSetting);
          }}
        />

        <View style={{ flex: 1, backgroundColor: Colors.kF4FBFF }}>
          <FlatList
            data={data}
            keyExtractor={(v, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => (
              <Card
                {...item}
                index={index}
                onPress={data => {
                  // console.log('item.......', data);
                  navigation.navigate(routeChoosePhoto);
                }}
              />
            )}
          />
        </View>
      </View>
    </Container>
  );
};

export default Home;
