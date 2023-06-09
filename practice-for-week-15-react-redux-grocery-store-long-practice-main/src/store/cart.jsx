
const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM'

export const addItem = (itemID) => ({
  type: ADD_ITEM,
  itemID 
});

export const removeItem = (itemID) => ({
  type: REMOVE_ITEM,
  itemID
})


export default function cartReducer(state = {}, action) {
  const nextState = Object.assign({}, state);

  switch (action.type) {
    case ADD_ITEM: 
      
      
      if (nextState[action.itemID]) {
        let cart_item = nextState[action.itemID]
        cart_item.count += 1 
      } else {
        nextState[action.itemID] = {id: action.itemID, count: 1}
      }

      return nextState;
    
    case REMOVE_ITEM:
      delete nextState[action.itemID]
      return nextState;

    default:
      return state;
  };
};