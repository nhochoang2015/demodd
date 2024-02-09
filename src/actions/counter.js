export const increment = (number) => {
    return {
      type: "INCREMENT",
      payload: number,
    };
  };
  export const decrement = (number) => {
    return {
      type: "DECREMENT",
      payload: number,
    };
  };
  export const double = (number) =>{
    return {
      type:"DOUBLE",
      payload: number,
    }
  };
  export const clear =()=> {
    return{
      type:'CLEAR'
    }
  };
  export const addTodo = (text) =>{
    return{
      type:'ADDTODO',
      payload: text,
    }
  }
  export const removeTodo = () =>{
    return{
      type:'REMOVETODOFIRST',
    }
  }