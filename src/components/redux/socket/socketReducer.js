const initialStateSocket={
    messages:[]
}

const userReducer = (state=initialStateSocket,action)=>{
    switch(action.type){
        case 'STORE_SOCKET':
            return {messages:action.payload}
        case 'UPDATE_SOCKET':
            return {messages:[...state.messages,action.payload]}
        case 'SEND_DATA':
        // return{messages:[...state.messages,action.payload]}
        return{messages:[action.payload]}
        // return{messages:[...state.messages,state.push(action.payload)]}
        default:
            return state;
    }
}

export default userReducer;