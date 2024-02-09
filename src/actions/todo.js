export const addTodo = (text) =>{
    return{
      type:'ADDTODO',
      payload: text
    }
  }
export const removeTodo = () =>{
      return{
        type:'REMOVETODOFIRST'
      }
    }