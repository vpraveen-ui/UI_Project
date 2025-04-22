import React,{useReducer} from 'react';
const initialState={
    firstName:"",
    lastName:""
  }
  function reducer(state=initialState,action){
    switch(action.type){
      case "FirstName":
        return{...state,firstName:action.payload}
      case "LastName":
        return{...state,lastName:action.payload}
      default:{
      return state
    }
    }
  }

export default function App(props) {

  const[state,dispatch]=useReducer(reducer,initialState)
  const handleChange=(e)=>{
    e.preventDefault();
    const{name,value}=e.target
    dispatch({type:name,payload:value})
  }
  return (
     <>
    <div className='App'>
      <label>FirstName</label>
      <input type="text" name="FirstName" onChange={handleChange}/>
    </div>
    <div className='App'>
      <label>LastName</label>
      <input type="text" name="LastName" onChange={handleChange}/>
    </div>
    <div className='App'>{state.firstName}</div>
    <div className='App'>{state.lastName}</div>
   </>
  );
}
