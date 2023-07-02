import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {StackNavigationProp} from '@react-navigation/stack';
type RootStackParamList = {
  Home: undefined;
  Register: undefined;
  Login: undefined;
};
type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Register'
>;
const RegisterScreen = ({
  navigation,
}: {
  navigation: LoginScreenNavigationProp;
}) => {
  const [successRegistration, setSuccessRegistration] = useState(false);
  return (
    <View
      style={[
        successRegistration && {
          height: '100%',
        },
      ]}>
      {successRegistration && (
        <View
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            alignItems: 'center',
            zIndex: 100,
          }}>
          <View
            style={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
              paddingVertical: 33,
              paddingHorizontal: 10,
              backgroundColor: '#3054C0',
              borderRadius: 10,
            }}>
            <Text
              style={[
                styles.text,
                {
                  color: '#fff',
                  fontSize: 20,
                  fontWeight: 300,
                },
              ]}>
              Вітаємо!
            </Text>
            <Text
              style={[
                styles.text,
                {
                  color: '#fff',
                  fontSize: 20,
                  fontWeight: 300,
                },
              ]}>
              Реєстрація у Спортивному
            </Text>
            <Text
              style={[
                styles.text,
                {
                  color: '#fff',
                  fontSize: 20,
                  fontWeight: 300,
                },
              ]}>
              місті успішна
            </Text>
          </View>
        </View>
      )}

      <View
        style={{
          display: 'flex',
          marginHorizontal: 20,
          marginTop: '15%',
        }}>
        <Text
          style={[
            styles.text,
            {
              color: '#3054C0',
              marginBottom: 24,
            },
          ]}>
          Реєстрація
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}>
            <Text style={[styles.text, {fontSize: 14}]}>Електронна адреса</Text>
            <TextInput style={styles.input} placeholder={'account@gmail.com'} />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}>
            <Text style={[styles.text, {fontSize: 14}]}>Ім'я</Text>
            <TextInput style={styles.input} placeholder={'Тарас'} />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}>
            <Text style={[styles.text, {fontSize: 14}]}>Прізвище</Text>
            <TextInput style={styles.input} placeholder={'Шевченко'} />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}>
            <Text style={[styles.text, {fontSize: 14}]}>Школа</Text>
            <TextInput
              style={styles.input}
              placeholder={'Навчально-виховний комплекс №15'}
            />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <View
              style={{
                width: '45%',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}>
              <Text style={[styles.text, {fontSize: 14}]}>Клас</Text>
              <TextInput
                style={{
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: '#3054C0',
                  paddingHorizontal: 15,
                  paddingVertical: 20,
                  fontFamily: 'Comfortaa',
                }}
                placeholder={'11'}
              />
            </View>
            <View
              style={{
                width: '45%',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}>
              <Text style={[styles.text, {fontSize: 14}]}>Стать</Text>

              <TextInput
                style={{
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: '#3054C0',
                  paddingHorizontal: 15,
                  paddingVertical: 20,
                  fontFamily: 'Comfortaa',
                }}
                placeholder={'Чоловіча'}
              />
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
            }}>
            <Text style={[styles.text, {fontSize: 14}]}>Пароль</Text>
            <TextInput style={styles.input} />
          </View>
          <TouchableOpacity
            style={{
              width: '100%',
              backgroundColor: '#3054C0',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 20,
              borderRadius: 5,
            }}>
            <Text
              style={[
                styles.text,
                {
                  color: '#fff',
                  fontSize: 16,
                },
              ]}>
              Реєстрація
            </Text>
          </TouchableOpacity>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              gap: 5,
            }}>
            <Text
              style={[
                styles.text,
                {
                  fontSize: 12,
                },
              ]}>
              У вас є обліковий запис?
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text
                style={[
                  styles.text,
                  {
                    fontSize: 12,
                    color: '#3054C0',
                  },
                ]}>
                Вхід
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
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

export default RegisterScreen;
