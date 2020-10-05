import React from 'react'

const Navigation = ({setRoute}) =>{
    return(
    <nav style={{display:'flex', justifyContent:'flex-end'}}>
        <p onClick={()=> setRoute('signin')} className='f3 link ma3 pointer dim underline'>Sign out</p>
    </nav>
    )
}
export default Navigation