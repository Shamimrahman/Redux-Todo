//three action
//add ,delete ,clear all

export const add=(data)=>{
    return{
        type:"ADD",
        payload:{
            id:new Date().getTime().toString(),
            data:data
        }
    }
}

export const del=()=>{
    return{
        type:"DELETE"
    }
}

export const clear=()=>{
    return{
        type:"CLEAR"
    
    }
}

