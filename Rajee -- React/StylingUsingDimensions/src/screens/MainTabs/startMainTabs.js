import { Navigation } from 'react-native-navigation';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const startTabs = () => {
    Promise.all([
        Icon.getImageSource(Platform.OS === 'android' ? "md-map" : "ios-map", 30),
        Icon.getImageSource(Platform.OS === 'android' ? "md-share-alt" : "ios-share ", 30)
    ]).then(sources => {
        Navigation.setRoot({
            root: {
                bottomTabs: {
                  children: [{
                    stack: {
                      children: [{
                        component: {
                          name: "awesome-places.FindPlaceScreen",
                          title: "Find Place"
                        }
                      }],
                      options: {
                        bottomTab: {
                          text: 'Find Place',
                          icon: sources[0],
                          testID: 'FIRST_TAB_BAR_BUTTON'
                        },
                        topBar: {
                          title: {
                            text: "Find Place"
                          }
                        }
                      }
                    }
                  },
                  {
                    stack: {
                      children: [{
                        component: {
                          name: "awesome-places.SharePlaceScreen",
                          title: "Share Place"
                        }
                      }],
                      options: {
                        bottomTab: {
                          text: 'Share Place',
                          icon: sources[1],
                          testID: 'FIRST_TAB_BAR_BUTTON'
                        },
                        topBar: {
                          title: {
                            text: "Share Place"
                          }
                        }
                      }
                    }
                    
                  }]
                }
              }
            
            
        });
    });
};

export default startTabs;
