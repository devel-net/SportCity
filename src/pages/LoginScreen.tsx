import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import SportCityLogo from '../assets/images/copyright/logo.svg';
import Selected from '../assets/images/components/selected.svg';
import NonSelected from '../assets/images/components/non-selected.svg';
import Hide from '../assets/images/components/hide.svg';
import Show from '../assets/images/components/show.svg';
import {StackNavigationProp} from '@react-navigation/stack';
type RootStackParamList = {
  Home: undefined;
  Register: undefined;
  Login: undefined;
};
type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Login'
>;
const LoginScreen = ({navigation}: {navigation: LoginScreenNavigationProp}) => {
  const [rememberMe, setRememberMe] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);
  return (
    <SafeAreaView>
      <View
        style={{
          marginHorizontal: 20,
          height: '100%',
        }}>
        {/*<Text*/}
        {/*  style={[*/}
        {/*    styles.text,*/}
        {/*    {color: '#3054C0', fontSize: 28, marginTop: 40},*/}
        {/*  ]}>*/}
        {/*  Вхід*/}
        {/*</Text>*/}
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 120,
          }}>
          <SportCityLogo />
        </View>
        <View
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            marginTop: 100,
            justifyContent: 'center',
          }}>
          <Text style={[styles.text, {fontSize: 14}]}>Електронна адреса</Text>

          <TextInput
            style={{
              borderRadius: 5,
              borderWidth: 1,
              borderColor: '#3054C0',
              paddingHorizontal: 15,
              paddingVertical: 20,
              fontFamily: 'Comfortaa',
            }}
            placeholder={'account@gmail.com'}
          />
        </View>
        <View
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            marginTop: 20,
          }}>
          <Text style={[styles.text, {fontSize: 14}]}>Пароль</Text>
          <TextInput
            style={{
              borderRadius: 5,
              borderWidth: 1,
              borderColor: '#3054C0',
              paddingHorizontal: 15,
              paddingVertical: 20,
              fontFamily: 'Comfortaa',
            }}
            secureTextEntry={hidePassword}
          />
          <TouchableOpacity
            onPress={() => setHidePassword(prevState => !prevState)}
            style={{
              position: 'absolute',
              right: 15,
              top: '50%',
              height: '100%',
            }}>
            {hidePassword ? <Hide /> : <Show />}
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => setRememberMe(prevState => !prevState)}
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 10,
            marginTop: 10,
          }}>
          {rememberMe ? <Selected /> : <NonSelected />}
          <Text>Запам’ятати мене</Text>
        </TouchableOpacity>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            display: 'flex',
          }}>
          <TouchableOpacity
            style={{
              width: '100%',
              backgroundColor: '#3054C0',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 20,
              borderRadius: 5,
              marginTop: 10,
            }}>
            <Text
              style={[
                styles.text,
                {
                  color: '#fff',
                  fontSize: 16,
                },
              ]}>
              Вхід
            </Text>
          </TouchableOpacity>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              gap: 5,
              marginTop: 10,
            }}>
            <Text
              style={[
                styles.text,
                {
                  fontSize: 12,
                },
              ]}>
              Не маєте облікового запису?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
              <Text
                style={[
                  styles.text,
                  {
                    fontSize: 12,
                    color: '#3054C0',
                  },
                ]}>
                Реєстрація
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontFamily: 'Comfortaa',
  },
  input: {
    display: 'flex',
    width: '100%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#3054C0',
    paddingHorizontal: 15,
    paddingVertical: 20,
    fontFamily: 'Comfortaa',
  },
});

export default LoginScreen;
