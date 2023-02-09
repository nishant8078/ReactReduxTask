import React from 'react'
import { useSelector} from 'react-redux'
import { useDispatch } from 'react-redux'
import {incNumber,decNumber} from '../actions/index'


const Body = () => {

  const myState=useSelector((state)=>state.changeNumber)
  const dispatch=useDispatch()

  return (
    <>
      <div className="jumbotron">
        <h1 className="display-4">Add balance or widraw balance</h1>
        <hr className="my-4" />
        <p className="lead">
          <a className="btn btn-primary btn-sm mx-2" href="/#" role="button"
          onClick={()=>dispatch(incNumber())}  title="INCREMENT">+</a>
          <input name='quantity' type='text' value={myState} />
          <a className="btn btn-primary btn-sm mx-2" href="/#" role="button" 
          
          onClick={()=>dispatch(decNumber())}  title="DECREMENT">-</a>
        </p>
      </div>
    </>
  )
}

export default Body