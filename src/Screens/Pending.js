import React, {Component} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

class Pending extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pending_Orders: [],
      refreshing: false,
      loading: false,
    };
  }

  async componentDidMount() {
    this.setState({loading: true});
    this.getData();
  }

  getData = () => {
    fetch('https://vivekchand19-eval-test.apigee.net/fooapp/v1/orders', {
      method: 'GET',
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        var array = [];
        res.forEach((value) => {
          if (value.status == 'pending') {
            array.push(value);
          }
        });
        this.setState({pending_Orders: array, loading: false, refreshing: false});
      });
  };

  refresh = () => {
    this.setState(
      {
        refreshing: true,
        pending_Orders: [],
      },
      () => {
        this.getData();
      },
    );
  };

  render() {
    const {loading} = this.state;
    if (loading) {
      return (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator size="large" color="#ffbe26" />
        </View>
      );
    }
    return (
      <View style={{flex: 1}}>
        <FlatList
          refreshing={this.state.refreshing}
          onRefresh={this.refresh}
          data={this.state.pending_Orders}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('DetainScreen', {
                    data: item,
                  })
                }
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: '#d1d1d1',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    padding: 5,
                    height: 50,
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderRightWidth: 1,
                    borderRightColor: "'d1d1d1",
                  }}>
                  <View
                    style={{
                      width: '10%',
                      height: 25,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRightWidth: 1,
                      borderRightColor: 'gray',
                    }}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>1</Text>
                  </View>

                  <View
                    style={{
                      flex: 1,
                      padding: 10,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={{color: '#ffbe26', fontSize: 18}}>
                      {item.total_price}
                    </Text>
                    <Text style={{fontWeight: 'bold', fontSize: 14}}>
                      {item.order_time}
                    </Text>
                  </View>
                </View>

                <View
                  style={{alignSelf: 'center', width: '90%', marginBottom: 10}}>
                  <Text>
                    {' '}
                    {item.items.map(
                      (value) => value.qty + ' x ' + value.name + ' ',
                    )}
                  </Text>

                  <View style={{marginTop: 5, flexDirection: 'row'}}>
                    <Text style={{color: 'green', fontWeight: 'bold'}}>
                      {item.flags.handle_and_complete + ' '}
                      <Text style={{fontWeight: 'bold', color: '#8f8f8f'}}>
                        SUCCESS
                      </Text>
                    </Text>

                    <Text
                      style={{
                        color: 'red',
                        fontWeight: 'bold',
                        paddingLeft: 10,
                      }}>
                      {item.flags.abuse + ' '}
                      <Text style={{fontWeight: 'bold', color: '#8f8f8f'}}>
                        ABUSE
                      </Text>
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  }
}

export default Pending;
