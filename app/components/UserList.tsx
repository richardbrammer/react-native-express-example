import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  FlatList
} from 'react-native';
import { connect, ConnectedProps } from 'react-redux';
import { bindActionCreators, Dispatch, AnyAction } from 'redux';

import { State } from '../reducers/usersReducer';
import fetchUsers from '../actions/fetchUsers';
import { User } from '../interfaces/user.interface';

const List = (props: { users: User[] }) => {
    const dimension = 60;

    return (
        <FlatList
            data={props.users}
            renderItem={({ item, index, separators }) => (
                <View style={{ padding: 10, margin: 3, borderRadius: 5, backgroundColor: 'white', flexDirection: 'row' }}>
                    <Image source={{ uri: item.avatar }} style={{ width: dimension, height: dimension, borderRadius: dimension / 2 }}/>
                    <Text style={{ padding: 22 }}>{item.name}</Text>
                </View>)}
        />
    )
}


class UserList extends Component<PropsFromRedux> {

    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        if (this.props.users.loading) {
            return (<View><Text>Loading...</Text></View>);
        }

        if (!this.props.users.list) {
            return (<View><Text>No Users</Text></View>)
        }

        return (
            <View style={{ width: '95%'}}>
                <List users={ this.props.users.list }></List>
            </View>
        )
    }
}

const mapStateToProps = (state: { users: State }) => {
    console.log(state);
    return { users: state.users };
}


const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => bindActionCreators({
    fetchUsers
}, dispatch)
  
const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(UserList)