import { loadUsers, loadUsersSuccess, loadUsersError } from './users';

/**
 * 
 */
function fetchUsers() {
    return (dispatch: any) => {
        dispatch(loadUsers());
        fetch('http://localhost:8000/api/v1/users')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                dispatch(loadUsersError())
            }
            dispatch(loadUsersSuccess(res));
            return res.products;
        })
        .catch(() => {
            dispatch(loadUsersError());
        })
    }
}

export default fetchUsers;