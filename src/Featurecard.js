import React from 'react'

export default function Featurecard(props) {
  console.log(props);
  return (
    <div className='feature-card' style={{marginBottom:'64px'}}>
      <div style={{width:'387px', height:'265px', display:'flex', alignItems:'center', justifyContent:'center', backgroundColor:'#f1f2f4', borderRadius:'16px' }}>
        <img style={{height:'80%'}} src={props.data.img}/>
      </div>
      <div className='s3-capsule'>{props.data.btn}</div>
      <div style={{width:'367px', textAlign:'left', color:'var(--extracted-r6o4lv)'}}>{props.data.txt}</div>
    </div>
  )
}
