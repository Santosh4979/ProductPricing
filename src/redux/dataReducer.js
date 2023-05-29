import { DATA_UPDATE } from './constant';
const initialState = {
data: []
};
const dataReducer = (state = initialState, action) => {
switch(action.type) {
case DATA_UPDATE:
return {
...state,
data:action.payload
};
default:
return state;
}
}
export default dataReducer;