import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
// @ts-ignore
import Background from '../assets/images/MainScreen/background.png';
// @ts-ignore
import SvgImageKhnu from '../assets/images/copyright/khnu.svg';
// @ts-ignore
import SvgImageKhm from '../assets/images/copyright/khm.svg';
// @ts-ignore
import SportLogo from '../assets/images/copyright/logo.svg';
import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  Register: undefined;
  Login: undefined;
};
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const WelcomeScreen = ({
  navigation,
}: {
  navigation: HomeScreenNavigationProp;
}) => {
  return (
    <ImageBackground
      source={Background}
      style={{
        flex: 1,
      }}>
      <SafeAreaView style={styles.container}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Text
            style={[
              styles.text,
              {
                fontSize: 12,
                color: '#3054C0',
                marginTop: 20,
                marginBottom: 10,
              },
            ]}>
            За підтримки
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 24,
            }}>
            <SvgImageKhnu />
            <SvgImageKhm />
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 100,
            marginBottom: 100,
          }}>
          <SportLogo />
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 20,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Register');
            }}
            style={{
              display: 'flex',
              width: 340,
              height: 50,
              backgroundColor: '#3054C0',
              borderRadius: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={[
                styles.text,
                {
                  color: '#fff',
                },
              ]}>
              Реєстрація
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login');
            }}
            style={{
              display: 'flex',
              width: 340,
              height: 50,
              backgroundColor: '#fff',
              borderColor: '#3054C0',
              borderRadius: 5,
              borderWidth: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={[
                styles.text,
                {
                  color: '#3054C0',
                },
              ]}>
              Вхід
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
  },
  text: {
    fontWeight: 'bold',
    fontFamily: 'Comfortaa',
  },
});

export default WelcomeScreen;
