import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

class Pending extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pending_Orders: [
        {
          key: 1,
          index: '1',
          price: '$9.90',
          time: '12 min',
          orderDetail: '1 x Tea, 1 x Cola, 2 x Ice Tea',
          success: "Success",
          abuse: "Abuse"
        },
      ]
    };
  }

  render() {
    return (
      <View style={{flex: 1 }}>
        <FlatList data={this.state.pending_Orders}  renderItem={({item}) => {
          return(
            <View key={`${item.key}`} style={{borderBottomWidth: 1, borderBottomColor: "#d1d1d1", justifyContent: "center"}}>
            <View style={{ padding: 5, height: 50, flexDirection: "row", alignItems: "center", borderRightWidth: 1, borderRightColor: "'d1d1d1" }}>
              <View style={{ width: "10%", height: 25, alignItems: "center", justifyContent: "center", borderRightWidth: 1, borderRightColor: "gray" }}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.index}</Text>
              </View>

              <View style={{ flex: 1, padding: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <Text style={{ color: "#ffbe26", fontSize: 18 }}>{item.price}</Text>
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>{item.time}</Text>
              </View>
            </View>

            <View style={{alignSelf: "center", width: "90%", marginBottom: 10}}>
              <Text>{item.orderDetail}</Text>
              <View style={{marginTop: 5, flexDirection: "row"}}>
              <Text style={{color: 'green', fontWeight: "bold",}}>1 <Text style={{fontWeight: "bold", color: "#8f8f8f"}}>{item.success}</Text></Text>
              <Text style={{color: 'red', fontWeight: "bold", paddingLeft: 10}}>0 <Text style={{fontWeight: "bold", color: "#8f8f8f"}}>{item.abuse}</Text></Text>

              </View>
            </View>

          </View>
          )
        }} />

      </View>
    );
  }
}

export default Pending;
