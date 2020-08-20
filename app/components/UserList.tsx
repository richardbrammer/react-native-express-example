import React, { useEffect } from 'react';
import {
  View,
  Text,
  Image,
  FlatList
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { User } from '../interfaces/user.interface';
import { State } from '../reducers/usersReducer';
import fetchUsers from '../actions/fetchUsers';

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

const UserList = () => {

    const users = useSelector((state: { users: State}) => state.users);
    const dispatch = useDispatch(); 
    
    useEffect(() => {
        dispatch (fetchUsers());
    }, []);

    if (users.error) {
        return (<View><Text>Error loading users.</Text></View>)
    }

    if (users.loading) {
        return (<View><Text>Loading...</Text></View>);
    }

    if (!users.list) {
        return (<View><Text>No users</Text></View>)
    }

    return (
        <View style={{ width: '95%'}}>
            <List users={ users.list }></List>
        </View>
    )
    
}

export default UserList;