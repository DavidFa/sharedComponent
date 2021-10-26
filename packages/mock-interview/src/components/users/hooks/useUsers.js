import { useEffect, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userSelectors, actions } from '../../../store/reducers/userReducer';
import { mockUsers } from '../../../store/thunks/userThunk';


const useUsers = () => {
    const users = useSelector(userSelectors.selectEntities);
    const [userList, setUserList] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(mockUsers(10));
    }, [dispatch])

    useEffect(() => {
        if (!!users) {
            // console.log(users);
            const list = [];
            for (const id of Object.keys(users)) {
                // if (Object.hasOwnProperty.call(users, id)) {
                    const userItem = users[id];
                    list.push(userItem);
                // }
            }
            setUserList(list);
        }
    }, [users])

    const editHandler = useCallback(
        (id) => {
            dispatch(actions.setEditUserId(id))
        },
        [dispatch]
    )

    return { users, dispatch, userList, editHandler }
}

export default useUsers;
