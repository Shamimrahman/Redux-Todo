const initialData={
    list:[]
}

const todoRed=(state=initialData,action)=>{
    switch(action.type){
        case "ADD":

    //destructuring of payload elements
    const{id,data}=action.payload;
    return{
        ...state,
        data:[
            ...state.list,
            {
                id:id,
                data:data
            }
        ]
    }
    default:return state
    }

}


export default todoRed