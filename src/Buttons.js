import React from 'react';
import {useGlobalContext} from './context'
const Buttons = ()=>{
    const {page,nbPages,handlePage} = useGlobalContext();
    return <div className="buttons">

        <button className="btn" onClick={()=>handlePage('dec')}>Prev</button>
        <p className="btn-text">{`${page+1} of ${nbPages}`}</p>
        <button className="btn" onClick={()=>handlePage('inc')}>Next</button>
             </div>
}

export default Buttons