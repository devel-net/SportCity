import React from 'react';

import {observer} from 'mobx-react-lite';
import {NavigationContainer} from '@react-navigation/native';
import ScreenController from './src/navigation/ScreenController';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <ScreenController />
    </NavigationContainer>
  );
}

export default observer(App);
