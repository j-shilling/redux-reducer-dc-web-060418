export function manageFriends(state, action){
    switch(action.type) {
    case "ADD_FRIEND":
	return Object.assign({}, state, {friends: [...state.friends, action.friend]});
    case "REMOVE_FRIEND":
	return Object.assign({}, state, {friends: state.friends.filter(el => el.id !== action.id)});
    default:
	return state;
    }
}
