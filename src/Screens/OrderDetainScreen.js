import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image, Modal} from 'react-native';

export class OrderDetainScreen extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  state = {
    modalVisible: false,
  };

  modal = ({visible}) => {
    const {modalVisible} = this.state;

    if (!modalVisible) {
      this.setState({
        modalVisible: visible,
      });
    }
  };

  Button_handler = (status) => {
    fetch('https://vivekchand19-eval-test.apigee.net/fooapp/v1/orders/report', {
      method: 'POST',
      body: JSON.stringify({
        table: '',
        report: status,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.success == 1) {
          alert(res.message);
        }
        this.setState({modalVisible: false})
      });
  };

  render() {
    const orderData = this.props.navigation.getParam('data');
    return (
      <View style={{flex: 1}}>
        <View
          style={{height: 50, backgroundColor: 'black', flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
            style={{flex: 0.2, alignItems: 'center', justifyContent: 'center'}}>
            <Image
              source={require('../Assets/back.png')}
              style={{
                width: 15,
                height: 15,
                resizeMode: 'contain',
                tintColor: '#778080',
              }}
            />
          </TouchableOpacity>

          <View
            style={{
              flex: 1.5,
              justifyContent: 'flex-end',
              paddingLeft: 5,
              paddingBottom: 5,
            }}>
            <Text style={{fontSize: 16, color: 'gray'}}>
              Restaurant The North pole
            </Text>
          </View>
        </View>

        <View
          style={{
            height: '10%',
            flexDirection: 'row',
            borderWidth: 1,
            borderColor: 'gray',
            alignItems: 'center',
          }}>
          <View
            style
            style={{
              flex: 1,
              height: '80%',
              alignItems: 'center',
              justifyContent: 'center',
              borderRightWidth: 1,
              borderRightColor: 'gray',
            }}>
            <Image
              source={require('../Assets/marker.png')}
              style={{width: 30, height: 30, resizeMode: 'contain'}}
            />
            <Text style={{paddingTop: 10, fontWeight: 'bold'}}>
                34
            </Text>
          </View>

          <View
            style
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image
              source={require('../Assets/coins.png')}
              style={{width: 30, height: 30, resizeMode: 'contain'}}
            />
            <Text style={{paddingTop: 10, fontWeight: 'bold', color: ''}}>
              {orderData.total_price}
            </Text>
          </View>

          <View
            style
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image
              source={require('../Assets/clock.png')}
              style={{width: 30, height: 30, resizeMode: 'contain'}}
            />
            <Text style={{paddingTop: 10, fontWeight: 'bold'}}>
              9 min
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            padding: 10,
            borderBottomWidth: 1,
            borderBottomColor: 'gray',
            backgroundColor: '#e7e7e7',
          }}>
          <Text>{orderData.items[0].qty}</Text>

          <Text style={{paddingLeft: 10, fontWeight: 'bold', color: '#ffbe26'}}>
            X
          </Text>
          <Text style={{paddingLeft: 10}}>{orderData.items[0].name}</Text>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <Text>{orderData.items[0].price}</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            padding: 10,
            borderBottomWidth: 1,
            borderBottomColor: 'gray',
            backgroundColor: '#e7e7e7',
          }}>
          <Text>{orderData.items[1].qty}</Text>
          <Text style={{paddingLeft: 10, fontWeight: 'bold', color: '#ffbe26'}}>
            X
          </Text>
          <Text style={{paddingLeft: 10}}>{orderData.items[1].name}</Text>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <Text>{orderData.items[1].price}</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            padding: 10,
            borderBottomWidth: 1,
            borderBottomColor: 'gray',
            backgroundColor: '#e7e7e7',
          }}>
          <Text>{orderData.items[2].qty}</Text>
          <Text style={{paddingLeft: 10, fontWeight: 'bold', color: '#ffbe26'}}>
            X
          </Text>
          <Text style={{paddingLeft: 10}}>{orderData.items[2].name}</Text>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <Text>{orderData.items[2].price}</Text>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            backgroundColor: '#C2C2C2',
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              backgroundColor: '#fff',
              height: 45,
              justifyContent: 'center',
            }}>
            <View style={{alignSelf: 'center', width: '90%'}}>
              <View style={{marginTop: 5, flexDirection: 'row'}}>
                <Text style={{color: 'green', fontWeight: 'bold'}}>
                  {orderData.flags.handle_and_complete + ' '}
                  <Text style={{fontWeight: 'bold', color: '#8f8f8f'}}>
                    SUCCESS
                  </Text>
                </Text>
                <Text
                  style={{color: 'red', fontWeight: 'bold', paddingLeft: 10}}>
                  {orderData.flags.abuse + ' '}
                  <Text style={{fontWeight: 'bold', color: '#8f8f8f'}}>
                    ABUSE
                  </Text>
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              height: 60,
              flexDirection: 'row',
              backgroundColor: '#474747',
              paddingTop: 3,
              justifyContent: 'space-between',
            }}>
            <TouchableOpacity
            onPress={() => this.props.navigation.goBack()}
              style={{
                width: '29%',
                height: '100%',
                backgroundColor: '#808080',
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff'}}>
                Back
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                this.modal(true);
              }}
              style={{
                width: '70%',
                height: '100%',
                backgroundColor: '#ffbe26',
                borderRadius: 5,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff'}}>
                Handle
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <Modal
          visible={this.state.modalVisible}
          animationType="none"
          transparent={true}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'rgba(0,0,0,0.5)',
              justifyContent: 'center',
            }}>
            <View
              style={{
                width: '60%',
                height: '45%',
                alignSelf: 'center',
                backgroundColor: '#fff',
                padding: 8,
                justifyContent: 'space-between',
              }}>
              <TouchableOpacity
                onPress={() => {this.Button_handler("handle_and_complete")}}
                style={{
                  width: '95%',
                  height: 60,
                  alignSelf: 'center',
                  borderWidth: 1,
                  borderColor: '#C6C6C6',
                  backgroundColor: 'green',
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff'}}>
                  Handle and complete
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
               onPress={ () => {this.Button_handler("handle") }}
                style={{
                  width: '95%',
                  height: 60,
                  alignSelf: 'center',
                  borderWidth: 1,
                  borderColor: '#C6C6C6',
                  backgroundColor: '#ffbe26',
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff'}}>
                  Handle
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
               onPress={() => {this.Button_handler("dismiss")}}
                style={{
                  width: '95%',
                  height: 60,
                  alignSelf: 'center',
                  borderWidth: 1,
                  borderColor: '#C6C6C6',
                  backgroundColor: '#929292',
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff'}}>
                  Dismiss
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
               onPress={() => {this.Button_handler("abuse")}}
                style={{
                  width: '95%',
                  height: 60,
                  alignSelf: 'center',
                  borderWidth: 1,
                  borderColor: '#C6C6C6',
                  backgroundColor: '#852C2C',
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff'}}>
                  Abuse
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  this.setState({modalVisible: false});
                }}
                style={{
                  width: '95%',
                  height: 60,
                  alignSelf: 'center',
                  borderWidth: 1,
                  borderColor: '#C6C6C6',
                  backgroundColor: '#fff',
                  borderRadius: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: 18, color: 'blue'}}>Back</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default OrderDetainScreen;
