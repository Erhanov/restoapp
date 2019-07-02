const initialState = {
    menu : [],
    loading : true,
    error : false,
    items : [],
    total : 0,
    count : [0, 0, 0, 0, 0]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MENU_LOADED' : 
            return {
                ...state,
                menu : action.payload,
                loading : false,
                error : false
            };
        case 'MENU_REQUESTED' : 
            return {
                ...state,
                menu : state.menu,
                loading : true,
                error : state.error
            };
        case 'MENU_ERROR' : 
            return {
                ...state,
                menu : state.menu,
                loading : false,
                error : true
            };
        case 'ITEM_ADD_TO_CART' : 
            const id = action.payload;
            const item = state.menu.find(item => item.id === id);
            state.count[id - 1]++;
            const newItem = {
                title : item.title,
                price : item.price,
                url : item.url,
                id : item.id,
                count : state.count[id - 1]
            };
            console.log(newItem.count);
            const newTotalAdd = state.total + newItem.price;
            if (state.count[id - 1] < 2) {
                return {
                    ...state, 
                    items : [
                        ...state.items, 
                        newItem
                    ],
                    total : newTotalAdd
                }
            } else {
                return {
                    ...state, 
                    items : [
                        ...state.items
                    ],
                    total : newTotalAdd
                }
            }
        case 'ITEM_REMOVE_FROM_CART' :
            const idx = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === idx);
            console.log(state.count);
            const itemPrice = state.menu.find(item => item.id === idx);
            const newItemDelete = {
                price : itemPrice.price
            };
            const newTotalDelete = state.total - (newItemDelete.price * state.count[idx - 1]);
            state.count[idx - 1]--;
            return {
                ...state,
                items : [
                    ...state.items.slice(0, itemIndex),
                    ...state.items.slice(itemIndex + 1)
                ],
                total : newTotalDelete
            }
        default : 
            return state;
    }
}

export default reducer;