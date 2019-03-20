import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

// import Login from './screens/Login';
import List from './screens/List';
import Detail from './screens/Detail';

const Routes = createAppContainer(
  createSwitchNavigator({
    // Home,
    User: createStackNavigator({
      List,
      Detail,
    }),
  }),
);

export default Routes;
