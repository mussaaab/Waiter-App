import React, {Component} from 'react';
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
          title: 'Orders',
          data: [
            {
              key: 1,
              index: '1',
              price: '$9.90',
              time: '12 min',
              orderDetail: '1 x Tea, 1 x Cola, 2 x Ice Tea',
            },
            {
              key: 1,
              title: 'Deals',
              index: '1',
              price: '$9.90',
              time: '12 min',
              orderDetail: '1 x Tea, 1 x Cola, 2 x Ice Tea',
            },
            {
              key: 1,
              title: 'Deals',
              index: '1',
              price: '$9.90',
              time: '12 min',
              orderDetail: '1 x Tea, 1 x Cola, 2 x Ice Tea',
            },
          ],
        },
        {
          title: 'Waiters',
          data: [
            {
              key: 1,
              title: 'Deals',
              index: '1',
              price: '$9.90',
              time: '12 min',
              orderDetail: '1 x Tea, 1 x Cola, 2 x Ice Tea',
            },
            {
              key: 1,
              title: 'Deals',
              index: '1',
              price: '$9.90',
              time: '12 min',
              orderDetail: '1 x Tea, 1 x Cola, 2 x Ice Tea',
            },
            {
              key: 1,
              title: 'Deals',
              index: '1',
              price: '$9.90',
              time: '12 min',
              orderDetail: '1 x Tea, 1 x Cola, 2 x Ice Tea',
            },
          ],
        },
      ],
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <SectionList
          style={{flex: 1}}
          sections={this.state.options}
          renderSectionHeader={({section: {title}}) => <Text>{title}</Text>}
          renderItem={({item}) => {
            return <Text>{item.index}</Text>;
          }}
          SectionSeparatorComponent={() => (
            <View style={{height: 1, backgroundColor: 'red'}} />
          )}
        />
      </View>
    );
  }
}

export default New;
