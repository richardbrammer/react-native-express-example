import React, { useEffect } from 'react';
import {
  View,
  Text,
  Image,
  FlatList
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import fetchUsers from '../actions/fetchUsers';
import { User } from '../interfaces/user.interface';
import { State } from '../reducers/usersReducer';

/**
 * Renders the actual FlatList of users, should only be used, if props.users
 * has a length > 0
 * @param props {{ users: User[] }} list of users in in the 'users' property 
 */
const List = (props: { users: User[] }) => {
    const dimension = 60;

    return (
        <FlatList
            data={props.users}
            renderItem={({ item }) => (
                <View style={{ padding: 10, margin: 3, borderRadius: 5, backgroundColor: 'white', flexDirection: 'row' }}>
                    <Image source={{ uri: item.avatar }} style={{ width: dimension, height: dimension, borderRadius: dimension / 2 }}/>
                    <Text style={{ padding: 22 }}>{item.name}</Text>
                </View>)}
        />
    )
}


/**
 * Selects the users Redux store and renders information based on the loading state 
 * of the API call: shows a generic error message, th loading state (while the
 * call is pending) or the List of Users. Shows a message, if the list of users
 * is empty.
 */
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
        return (<View><Text>User list is empty.</Text></View>)
    }

    return (
        <View style={{ width: '95%'}}>
            <List users={ users.list }></List>
        </View>
    )
    
}

export default UserList;