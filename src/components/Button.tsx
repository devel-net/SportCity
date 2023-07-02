import React from 'react';
import {
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
  TextStyle,
  StyleProp,
  ViewStyle,
} from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  label: string;
  backgroundColor: string;
  textColor: string;
  buttonStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
}

const Button: React.FC<ButtonProps> = ({
  onPress,
  label,
  backgroundColor,
  textColor,
  buttonStyle,
  labelStyle,
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[{backgroundColor, padding: 10, borderRadius: 5}, buttonStyle]}>
    <Text
      style={[
        {color: textColor, fontSize: 16, textAlign: 'center'},
        labelStyle,
      ]}>
      {label}
    </Text>
  </TouchableOpacity>
);

export default Button;
