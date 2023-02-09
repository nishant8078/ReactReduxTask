const initialState=0;

const changeNumber=(state=initialState,action)=>{

    switch (action.type) {
        case "INCREMENT": return state+30;
        case "DECREMENT": if (state===0) {
            alert("can not go below")
        }  
        else{return state-30;}
        break;
        default: return state;
    }

}

export default changeNumber;