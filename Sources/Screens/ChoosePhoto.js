import React, { useRef, useState } from 'react';
import {
  FlatList,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import { Modalize } from 'react-native-modalize';
import RNFS from 'react-native-fs';
import {
  Card,
  Container,
  FontText,
  Header,
  LinearButton,
  HorizontalCard,
  SimpleButton,
} from '../Common';
import { Colors, Fonts, Images, Responsive, Strings } from '../Constants';
import { routePhotoTaken } from './PhotoTaken';
import { routePremium } from './Premium';
import { routeSaveAndShare } from './SaveAndShare';

export const routeChoosePhoto = 'Choose Photo';

const ChoosePhoto = props => {
  const { navigation } = props;
  const ModelizeRef = useRef(null);
  const [Photo, setPhoto] = useState(null);

  const ModelizeData = [
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

  const HorizontalCardDATA = [
    {
      combo: Strings.ChoosePhoto.kStandardCombo,
      include: Strings.ChoosePhoto.kIncludeoriginal,
      subImages: [
        Images.img_sub_1,
        Images.img_sub_2,
        Images.img_sub_3,
        Images.img_sub_4,
      ],
      img_1: Images.img_cartoon_2,
      img_2: Images.img_cartoon_2,
      img_3: Images.img_cartoon_2,
    },
    {
      combo: Strings.ChoosePhoto.kStandardCombo,
      include: Strings.ChoosePhoto.kIncludeoriginal,
      subImages: [
        Images.img_sub_1,
        Images.img_sub_2,
        Images.img_sub_3,
        Images.img_sub_4,
      ],
      img_1: Images.img_cartoon_2,
      img_2: Images.img_cartoon_2,
      img_3: Images.img_cartoon_2,
    },
  ];

  const FourPhotoData = [
    Images.img_cartoon_1,
    Images.img_cartoon_1,
    Images.img_cartoon_1,
    Images.img_cartoon_1,
  ];

  const OpenGallery = () => {
    ImageCropPicker.openPicker({
      width: Responsive.wp(100),
      height: Responsive.hp(100),
      cropping: true,
    }).then(image => {
      setPhoto(image);
    });
  };

  const OpenCamera = () => {
    ImageCropPicker.openCamera({
      width: Responsive.wp(100),
      height: Responsive.hp(100),
      cropping: true,
    }).then(image => {
      if (image) {
        setPhoto(image);
      }
    });
  };

  const DownloadImage = async () => {
    if (!Photo) return alert('Please take photo...');
    else if (Photo) {
      const filePath = Platform.select({
        ios: RNFS.DocumentDirectoryPath,
        android: RNFS.ExternalStorageDirectoryPath,
      });
      const splitted = Photo.path.split('/');
      const fileName = splitted[splitted.length - 1];
      const newFolder = `${filePath}/Cartoonizer`;
      const savingFile = `${newFolder}/${fileName}`;

      console.log('filePath.....', filePath);
      console.log('fileName.....', fileName);
      console.log('newFolder....', newFolder);
      console.log('savingFile....', savingFile);

      try {
        await RNFS.mkdir(newFolder).then(async () => {
          await RNFS.moveFile(Photo?.path, savingFile).then(() => {
            alert('File Saved Successfully');
          });
        });
      } catch (error) {}
    }

    // for download through http ot https urls...
    // config({
    //   fileCache: true,
    //   addAndroidDownloads: {
    //     mime: Photo?.mime || 'image/jpeg',
    //     notification: false,
    //     useDownloadManager: true,
    //     path: Photo?.path,
    //   },
    // });
  };

  console.log('Photo......', Photo);

  return (
    <Container Dark={true} backgroundColor={Colors.kF4FBFF}>
      <View
        style={{
          flex: 1,
          paddingTop: Responsive.hp(1),
          backgroundColor: Colors.kF4FBFF,
        }}>
        <Modalize
          ref={ModelizeRef}
          handlePosition={'inside'}
          // modalHeight={Responsive.hp(90)}
          // snapPoint={Responsive.hp(60)}
          modalHeight={Responsive.hp(60)}
          modalStyle={{ paddingTop: Responsive.hp(2) }}
          customRenderer={() => (
            <View style={{ flex: 1 }}>
              <FlatList
                data={ModelizeData}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                renderItem={({ item, index }) => (
                  <Card
                    {...item}
                    index={index}
                    onPress={data => {
                      console.log('item.......', data);
                      navigation.navigate(routeChoosePhoto);
                    }}
                  />
                )}
              />
            </View>
          )}
        />

        {!Photo ? (
          <Header
            LeftIcon={Images.img_backIcon}
            LeftPress={() => navigation.goBack()}
            RightIcon={Images.img_Gallery}
            RightPress={() => OpenGallery()}
            RightIcon_1={Images.img_Download}
            RightPress_1={() => DownloadImage()}
            RightIcon_2={Images.img_Share}
            RightPress_2={() => navigation.navigate(routeSaveAndShare)}
            borderNeeded={true}
          />
        ) : (
          <Header
            LeftIcon={Images.img_backIcon}
            LeftPress={() => navigation.goBack()}
            LeftIcon_1={Images.img_Gallery}
            LeftPress_1={() => OpenGallery()}
            LeftIcon_2={Images.img_Camera}
            LeftPress_2={() => OpenCamera()}
            RightIcon={Images.img_Download}
            RightPress={() => DownloadImage()}
            RightIcon_1={Images.img_Share}
            RightPress_1={() => navigation.navigate(routeSaveAndShare)}
            borderNeeded={true}
            borderNeededLeft={true}
            rightStyle={{ flex: 1.1 }}
          />
        )}

        {/* ....Before Photo Clicked..... */}
        {!Photo && (
          <View style={styles.ChoosePhotoView}>
            <Image
              source={Images.img_ChooseBoy}
              resizeMode="contain"
              style={{
                width: Responsive.wp(60),
                height: Responsive.hp(25),
              }}
            />

            <LinearButton
              name={Strings.ChoosePhoto.kChoosePhoto}
              onPress={() => OpenGallery()}
              ContainerStyle={{ marginBottom: Responsive.hp(1) }}
            />

            <TouchableOpacity onPress={() => OpenCamera()}>
              <FontText
                color={Colors.k979797}
                name={Fonts.Regular}
                size={Responsive.normalize(13)}>
                {Strings.ChoosePhoto.kTakeSelfie}
              </FontText>
            </TouchableOpacity>
          </View>
        )}

        {/* .......After Photo Taken...... */}
        {Photo && (
          <View style={styles.PhotoTakenView}>
            <View style={styles.PhotoTakenSubView}>
              <Image
                source={{ uri: Photo.path }}
                resizeMode="stretch"
                style={{ width: '50%', height: '90%' }}
              />

              <TouchableOpacity
                onPress={() => setPhoto(null)}
                style={styles.Trash}>
                <Image
                  source={Images.img_Trash}
                  resizeMode="stretch"
                  style={{
                    width: '75%',
                    height: '75%',
                    tintColor: Colors.white,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* ....Api Response.... */}
        {/* <View style={styles.ResponseMainView}>
          {FourPhotoData.map((item, index) => (
            <View key={index}>
              <Image
                source={item}
                resizeMode="stretch"
                style={{
                  width: Responsive.wp(45),
                  height: Responsive.hp(18),
                }}
              />
            </View>
          ))}
        </View>

        <FontText
          color={Colors.k26325C}
          name={Fonts.Medium}
          textAlign={'center'}
          pTop={Responsive.hp(1)}
          size={Responsive.normalize(14)}>
          {Strings.ChoosePhoto.kRateresults}
        </FontText>

        <View style={styles.emojiView}>
          <Image
            source={Images.img_LoveEmoji}
            resizeMode="contain"
            style={{
              width: Responsive.wp(8),
              height: Responsive.wp(8),
              marginRight: Responsive.wp(3),
            }}
          />
          <Image
            source={Images.img_SadEmoji}
            resizeMode="contain"
            style={{ width: Responsive.wp(8), height: Responsive.wp(8) }}
          />
        </View>

        <SimpleButton
          title={Strings.ChoosePhoto.kSignupToGet}
          containerStyle={{ marginTop: Responsive.hp(1) }}
        />

        <FontText
          color={Colors.k979797}
          name={Fonts.Regular}
          textAlign={'center'}
          pTop={Responsive.hp(1)}
          size={Responsive.normalize(14)}>
          {Strings.ChoosePhoto.kNowaterMarkimage}
        </FontText>

        <SimpleButton
          title={Strings.ChoosePhoto.kGoPremium}
          containerStyle={{ marginTop: Responsive.hp(1) }}
          onPress={() => navigation.navigate(routePremium)}
        /> */}
        {/* ......Finished...... */}

        <View
          style={{
            position: 'absolute',
            bottom: 0,
            backgroundColor: Colors.kF4FBFF,
          }}>
          <HorizontalCard data={HorizontalCardDATA} />

          <TouchableOpacity onPress={() => ModelizeRef.current.open()}>
            <FontText
              color={Colors.k3E60FF}
              pTop={Responsive.hp(1)}
              name={Fonts.Regular}
              textAlign={'center'}
              size={Responsive.normalize(16)}>
              {'View All'}
            </FontText>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default ChoosePhoto;

const styles = StyleSheet.create({
  ChoosePhotoView: {
    flex: 1,
    alignItems: 'center',
    marginTop: Responsive.hp(7),
  },
  PhotoTakenView: {
    width: Responsive.wp(90),
    alignSelf: 'center',
    height: Responsive.wp(60),
    marginTop: Responsive.hp(18),
    padding: Responsive.wp(4),
    backgroundColor: Colors.white,
  },
  PhotoTakenSubView: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#000',
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Trash: {
    width: Responsive.wp(8),
    height: Responsive.wp(8),
    borderWidth: 1,
    position: 'absolute',
    bottom: Responsive.hp(1.5),
    left: Responsive.wp(20),
    tintColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.white,
    borderRadius: 100,
  },
  ResponseMainView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  emojiView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

// const DownloadImage = () => {

//   // Main function to download the image

//   // To add the time suffix in filename
//   const date = new Date();

//   const ImagePath = 'https://www.gstatic.com/webp/gallery3/2.png';

//   // Getting the extention of the file
//   const [ext] = getExtention(ImagePath);
//   console.log(ext);
//   // Get config and fs from RNFetchBlob
//   // config: To pass the downloading related options
//   // fs: Directory path where we want our image to download
//   // const PictureDir = Platform.select({
//   //   ios: RNFetchBlob.fs.dirs.DocumentDir,
//   //   android: RNFetchBlob.fs.dirs.DownloadDir,
//   // });

//   // const options = {
//   //   fileCache: true,
//   //   addAndroidDownloads: {
//   //     // Related to the Android only
//   //     useDownloadManager: true,
//   //     notification: true,
//   //     title: "Vivek's File",
//   //     path: dir + '/vivek.' + ext,
//   //     description: 'Downloading image.',
//   //   },
//   // };

//   const dir = RNFetchBlob.fs.dirs.DCIMDir;

//   RNFetchBlob.config({
//     fileCache: true,
//     addAndroidDownloads: {
//       useDownloadManager: true,
//       notification: false,
//       title: "Vivek's File",
//       path: dir + '/vivek_' + ext,
//       description: 'Downloading image.',
//     },
//   })
//     .fetch('GET', ImagePath)
//     .then(res => {
//       // Showing alert after successful downloading
//       console.log('res -> ', JSON.stringify(res));
//       alert('Image Downloaded Successfully.');
//     });
// };

// const getExtention = filename =>
//   /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined;
