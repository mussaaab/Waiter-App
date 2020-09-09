import React from 'react';
import {StatusBar, View, Text, Image, TouchableOpacity} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import OrderDetainScreen from './src/Screens/OrderDetainScreen';

// Tabs Screens
import New from './src/Screens/New';
import Pending from './src/Screens/Pending';
import Compeleted from './src/Screens/Compeleted';

class App extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      routes: [
        {key: 'New', title: 'New'},
        {key: 'Pending', title: 'Pending'},
        {key: 'Complete', title: 'Completed'},
      ],
    };
  }

  refresh = () => {
    this.New.refresh();
    this.Pending.refresh();
    this.Compeleted.refresh();
  };

  render() {
    const {index, routes} = this.state;

    var renderScene = ({route}) => {
      switch (route.key) {
        case 'New':
          return (
            <New
              ref={(component) => (this.New = component)}
              callback={(callback) => this.callback(callback)}
              navigation={this.props.navigation}
            />
          );

        case 'Pending':
          return (
            <Pending
              ref={(component) => (this.Pending = component)}
              callback={(callback) => this.callback(callback)}
              navigation={this.props.navigation}
            />
          );

        case 'Complete':
          return (
            <Compeleted
              ref={(component) => (this.Compeleted = component)}
              callback={(callback) => this.callback(callback)}
              navigation={this.props.navigation}
            />
          );
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
              onPress={this.refresh}
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
              style={{backgroundColor: '#2e2e2e'}}
              labelStyle={{fontSize: 12}}
              tabStyle={{borderRightWidth: 1, borderRightColor: 'gray'}}
            />
          )}
        />
      </View>
    );
  }
}

const HomeStack = createStackNavigator({
  App: App,
  DetainScreen: OrderDetainScreen,
});

const AppContainer = createAppContainer(HomeStack);
export default AppContainer;
