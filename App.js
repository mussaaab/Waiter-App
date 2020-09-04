import React from 'react';
import {StatusBar, View, Text, Image, TouchableOpacity} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

// Tabs Screens
import New from './src/Screens/New';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        {key: 'New', title: 'New (11)'},
        {key: 'Pending', title: 'Pending (1)'},
        {key: 'Complete', title: 'Completed (2)'},
      ],
    };
  }

  render() {
    const {index, routes} = this.state;

    var renderScene = ({route}) => {
      switch (route.key) {
        case 'New':
          return <New />;
      }
    };

    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="#2e2e2e" />
        <View
          style={{height: 70, flexDirection: 'row', backgroundColor: 'black'}}>
          <View
            style={{
              flex: 2.5,
              alignItems: 'center',
              justifyContent: 'flex-end',
              paddingBottom: 10,
            }}>
            <Text style={{fontSize: 18, color: 'gray'}}>
              Restaurant The North pole
            </Text>
          </View>

          <View style={{flex: 1, flexDirection: 'row'}}>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('./src/Assets/refresh.png')}
                style={{
                  width: 25,
                  height: 25,
                  resizeMode: 'contain',
                  tintColor: '#778080',
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                source={require('./src/Assets/arrow-right.png')}
                style={{
                  width: 30,
                  height: 30,
                  resizeMode: 'contain',
                  tintColor: '#778080',
                }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={(index) => this.setState({index})}
          renderTabBar={(props) => (
            <TabBar
              {...props}
              indicatorStyle={{backgroundColor: '#ffbe26', height: 5}}
              style={{backgroundColor: '#2e2e2e',}}
              labelStyle={{fontSize: 12}}
              tabStyle={{borderRightWidth: 1, borderRightColor: "gray", }}
            />
          )}
        />
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

export default App;
