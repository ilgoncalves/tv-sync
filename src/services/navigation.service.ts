import {
  CommonActions,
  createNavigationContainerRef,
} from '@react-navigation/native';

export class NavigationService {
  static readonly navigationRef = createNavigationContainerRef();

  static navigate(...args: Parameters<typeof CommonActions.navigate>) {
    if (NavigationService.navigationRef.isReady()) {
      NavigationService.navigationRef.dispatch(CommonActions.navigate(...args));
    }
  }

  static reset(...args: Parameters<typeof CommonActions.reset>) {
    if (NavigationService.navigationRef.isReady()) {
      NavigationService.navigationRef.dispatch(CommonActions.reset(...args));
    }
  }
}
