import { FC } from 'react';
import Navigation from '~/navigation';
import { Provider } from './providers';

import 'react-native-gesture-handler';

const App: FC = () => {
  return (
    <Provider>
      <Navigation />
    </Provider>
  );
};

export default App;
