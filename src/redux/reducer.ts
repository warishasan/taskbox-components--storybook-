import { createSlice, configureStore } from "@reduxjs/toolkit"

  const initialState  = [
    { id: '1', title: 'Something', state: 'TASK_INBOX' },
    { id: '2', title: 'Something more', state: 'TASK_INBOX' },
    { id: '3', title: 'Something else', state: 'TASK_INBOX' },
    { id: '4', title: 'Something again', state: 'TASK_INBOX' },
  ];


const taskReducer = createSlice({
    name: "tasks",
    initialState: initialState,
    reducers: {
pin: (state,action) => {
        return state.map( item =>{
               if ( item.id === action.payload.id) {
               return ({
        
                ...item,
                state:"TASK_PINNED"
        
               })
            }
        
            else{
        
                return item
            }
        
        })
        },



unpin: (state,action) => {
        return state.map( item =>{
               if ( item.id === action.payload.id) {
               return ({
        
                ...item,
                state:"TASK_INBOX"
        
               })
            }
        
            else{
        
                return item
            }
        
        })
        },        

archive: (state,action) => {
    return state.map( item =>{
       if ( item.id === action.payload.id) {
       return ({

        ...item,
        state:"TASK_ARCHIVED"

       })
    }

    else{

        return item
    }

})
},

add: (state,action) => {
    
    let id = "0";

    if (state.length !== undefined && state.length !== null){

        id = (state.length +1).toString();
    }
      
    return [...state, {id: id, title : action.payload.title, state :"TASK_INBOX"}]    
    

    },
}
    
})




const store = configureStore({

reducer: taskReducer.reducer

})


export const { pin, unpin, archive, add} = taskReducer.actions

export { taskReducer, store }