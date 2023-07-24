import { FC } from 'react';
import Navigation from '~/navigation';
import { Provider } from './providers';

import { LoadingOverlay } from './components/organisms';

const App: FC = () => {
  return (
    <Provider>
      <Navigation />
      <LoadingOverlay />
    </Provider>
  );
};

export default App;
