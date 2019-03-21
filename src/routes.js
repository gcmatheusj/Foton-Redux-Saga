import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import Home from './screens/Home';
import List from './screens/List';
import Detail from './screens/Detail';

const Routes = (userLogged = false) => createAppContainer(
  createSwitchNavigator(
    {
      Home,
      User: createStackNavigator({
        List,
        Detail,
      }),
    },
    {
      initialRouteName: userLogged ? 'User' : 'Home',
    },
  ),
);

export default Routes;
