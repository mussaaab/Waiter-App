import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SectionList,
} from 'react-native';

class New extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [
        {
          title_index: 1,
          title: 'Orders',
          title_time: "11 min",
          data: [
            {
              key: 1,
              index: '1',
              price: '$9.90',
              time: '12 min',
              orderDetail: '1 x Tea, 1 x Cola, 2 x Ice Tea',
              success: "Success",
              abuse: "Abuse"
            },
            {
              key: 2,
              index: '2',
              price: '$4.00',
              time: '12 min',
              orderDetail: '2 x Chasis',
              success: "Success",
              abuse: "Abuse"
            },
            {
              key: 3,
              index: '3',
              price: '$9.50',
              time: '20 min',
              orderDetail: '1 x Salad, 1 x Club Sandwich',
              success: "Success",
              abuse: "Abuse"
            },
            {
              key: 4,
              index: '3',
              price: '$20.50',
              time: '20 min',
              orderDetail: '1 x Chinese Rice, 1 x Cola',
              success: "Success",
              abuse: "Abuse"
            },
          ],
        },
        {
          title_index: 2,
          title: 'Waiters',
          title_time: "8 min",
          data: [
            {
              key: 1,
              index: '1',
              price: '$9.90',
              time: '12 min',
              orderDetail: '1 x Cola, 2 x Ice Tea',
              success: "Success",
              abuse: "Abuse"
            },
            {
              key: 2,
              index: '2',
              price: '$8.45',
              time: '5 min',
              orderDetail: '1 x Tea, 1 x Cola, 2 x Fries',
              success: "Success",
              abuse: "Abuse"
            },
            {
              key: 3,
              index: '3',
              price: '$12.50',
              time: '8 min',
              orderDetail: '1 x Burger, 1 x Cola, 1 x Fries',
              success: "Success",
              abuse: "Abuse"
            },
          ],
        },
      ],
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <SectionList
          style={{ flex: 1 }}
          sections={this.state.options}
          showsVerticalScrollIndicator={false}
          renderSectionHeader={({ section: { title, title_index, title_time } }) => (
            <View style={{ padding: 5, flex: 1, backgroundColor: "#eeeeee", alignItems: "center", flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#d1d1d1" }}>
              <View style={{ width: "10%", height: 35, alignItems: "center", justifyContent: "center", borderRightWidth: 1, borderRightColor: "gray" }}>
                <Text style={{ fontSize: 18, fontWeight: "bold" }}>{title_index}</Text>
              </View>

              <View style={{ flex: 1, padding: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <Text style={{ color: "#ffbe26", fontSize: 18 }}>{title}</Text>
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>{title_time}</Text>
              </View>
            </View>
          )}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => this.props.navigation.navigate("DetainScreen", {
                data: item
              }
              )} key={`${item.key}`} style={{ borderBottomWidth: 1, borderBottomColor: "#d1d1d1", justifyContent: "center" }}>
                <View style={{ padding: 5, height: 50, flexDirection: "row", alignItems: "center", borderRightWidth: 1, borderRightColor: "'d1d1d1" }}>
                  <View style={{ width: "10%", height: 25, alignItems: "center", justifyContent: "center", borderRightWidth: 1, borderRightColor: "gray" }}>
                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.index}</Text>
                  </View>

                  <View style={{ flex: 1, padding: 10, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <Text style={{ color: "#ffbe26", fontSize: 18 }}>{item.price}</Text>
                    <Text style={{ fontWeight: "bold", fontSize: 18 }}>{item.time}</Text>
                  </View>
                </View>

                <View style={{ alignSelf: "center", width: "90%", marginBottom: 10 }}>
                  <Text>{item.orderDetail}</Text>
                  <View style={{ marginTop: 5, flexDirection: "row" }}>
                    <Text style={{ color: 'green', fontWeight: "bold", }}>1 <Text style={{ fontWeight: "bold", color: "#8f8f8f" }}>{item.success}</Text></Text>
                    <Text style={{ color: 'red', fontWeight: "bold", paddingLeft: 10 }}>0 <Text style={{ fontWeight: "bold", color: "#8f8f8f" }}>{item.abuse}</Text></Text>

                  </View>
                </View>

              </TouchableOpacity>
            );
          }}
        // SectionSeparatorComponent={() => (
        //   <View style={{ height: 1,  }} />
        // )}
        />
      </View>
    );
  }
}

export default New;
