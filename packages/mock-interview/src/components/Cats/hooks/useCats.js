import { useEffect, useState, useCallback, useReducer } from 'react';
import { mockFetchCats } from '../../../api/helper';
import Cat from '../Cat';

// const cat = {
//     cats: [],
//     loading: 'idle',
//     message: null
// }
const initialState = {
    loading: true
}
const reducer = (state, action) => {
    switch (action.type) {
        case true:
            state.loading = true;
            return state;
        default:
            state.loading = false;
            return state;
    }

}
export const useCats = () => { 

    const [cats, setCats] = useState({ catList: [], cat: null });
    const [state, dispatch] = useReducer(reducer, initialState)
    // use reduxe toolkit -- createSlice, createAsyncThunk, createEntitiyAdapter

    const editCatHandler = useCallback(
        (id) => {
            // console.log("cat", cat)
            const myCat = cats.catList.find(item => item.id === id);
            const newCat = { ...myCat };
            const newCatList = [...cats.catList];
            setCats({ catList: newCatList, cat: newCat });
            // console.log(newCatList, newCat)
        },
        [cats.catList],
    )

    const onEditSubmitHandler = useCallback(
        (cat, e) => {
            e.preventDefault();
            const id = cat.id;
            const newCats = [...cats.catList];
            const index = newCats.findIndex(item => id === item.id);
            newCats.splice(index, 1, cat);
            const newCatList = newCats;
            setCats({ catList: newCatList, cat: null });
        },
        [cats.catList],
    )

    const getCat = () => {
        return cats.cat ? <Cat {...cats.cat} onEditSubmitHandler={onEditSubmitHandler} /> : null
    }

    useEffect(() => {
        let isFetchCancelled = false;

        mockFetchCats().then(response => {
            if (isFetchCancelled) return;
            if (response.ok)
                return response.json();
            else {
                throw new Error({ code: response.code })
            }

        }).then(data => {
            if (isFetchCancelled) return;
            const cat = null;
            const catList = data;
            setCats({ catList, cat })
        }).catch(error => {
            if (isFetchCancelled) return;
            switch (error.code) {
                case 400:
                    return "Bad Request"
                case 401:
                    return "Unauthorized"
                case 404:
                    return "Not Found"
                default:
                    return "Error"
            }
        });

        return () => {
            isFetchCancelled = true
        }
    }, [])

    return { cats, editCatHandler, onEditSubmitHandler, getCat, state }
}
