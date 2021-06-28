import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DefaultStack from './stacks/DefaultStack';

export default () => {
  return (
    <NavigationContainer>
      <DefaultStack />
    </NavigationContainer>
  );
};
