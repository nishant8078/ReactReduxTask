import React from 'react'
import { useSelector} from 'react-redux'



function Header() {

  const myState=useSelector((state)=>state.changeNumber)



  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="/#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/#">about</a>
      </li>
     
    </ul>
    
      <button className="btn btn-outline-success my-2 my-sm-0" disabled="true" >your balance : <span>{myState}</span></button>
   
  </div>
</nav>
    </>
  )
}

export default Header