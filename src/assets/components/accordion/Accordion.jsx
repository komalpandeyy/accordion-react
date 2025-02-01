import React, { useState } from 'react'
import data from './data';
const Accordion = () => {
  const[button,setButton] = useState(false);
  const[selected,setSelected] = useState(null);
  const[multi,setMulti] = useState(false);
  const[multipleSelected,setMultipleSelected] = useState([]);
  const handleSingleSelection = (getCurrentId)=>{
    //console.log(getCurrentId);
    setSelected(getCurrentId === selected?null:getCurrentId);
  }
  const handleMulti = ()=>{
   setMulti(multi == true?false:true);
    console.log(multi)
  }
  const handleMultipleSelection = (currId)=>{
    let cpyMultiple = [...multipleSelected];
    const idx  = cpyMultiple.indexOf(currId);

    if(idx == -1){
      cpyMultiple.push(currId);
    }
    else{
      cpyMultiple.splice(idx,1);
    }

    setMultipleSelected(cpyMultiple);
  }
  return (
    <>
    <h1 className='heading'>Accordion</h1>
    <button className='btn' onClick={handleMulti}>Enable Multi Selection</button>
    <div className="wrapper">
        
        <div className="accordion">
          {
            data && data.length>0?data.map(dataItem=><div className='item'>
              <div onClick = {()=>{
                multi == true?handleMultipleSelection(dataItem.id):handleSingleSelection(dataItem.id)
              }} className="title">
                <div className="h3">{dataItem.question}</div>
                <span>+</span>
               {
                  selected == dataItem.id ||multipleSelected.indexOf(dataItem.id)!=-1? <div className="content">{dataItem.answer}</div> : null
               }
              </div>
            </div>):<div>no data found</div>
          }
        </div>
    </div>
    </>
  )
}

export default Accordion