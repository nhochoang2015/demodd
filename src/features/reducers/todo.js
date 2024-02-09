    const initalState = {
        list:[]
    }

    const todoList = (state = initalState, action) =>{
    switch(action.type){
        case 'ADDTODO':        
            return {
                list : [
                    ...state.list,
                    action.payload
                ]
            };
        case 'REMOVETODOFIRST':
            return state.shift();
        default:
            return state;
    };
}
export default todoList;