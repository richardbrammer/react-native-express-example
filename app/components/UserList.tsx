import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList
} from 'react-native';
import { connect, ConnectedProps } from 'react-redux';
import { bindActionCreators, Dispatch, AnyAction } from 'redux';

import { State } from '../reducers/usersReducer';
import fetchUsers from '../actions/fetchUsers';
import { User } from '../interfaces/user.interface';

const List = (props: { users: User[] }) => {
    return (
        <FlatList 
            data={props.users}
            renderItem={({ item, index, separators }) => (
                <View style={{ backgroundColor: 'white' }}>
                    <Text>{item.name}</Text>
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
            <View>
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