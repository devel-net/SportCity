import authStore from '../store/authStore';
import {observer} from 'mobx-react-lite';
import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from '../pages/DashboardScreen';
import WelcomeScreen from '../pages/WelcomeScreen';
import RegisterScreen from '../pages/RegisterScreen';
import LoginScreen from '../pages/LoginScreen';

const ScreenController: React.FC = observer(() => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      {authStore.isLoggedIn ? (
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />
      ) : (
        <>
          <Stack.Screen
            name="Welcome"
            component={WelcomeScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
        </>
      )}
    </Stack.Navigator>
  );
});

export default ScreenController;
