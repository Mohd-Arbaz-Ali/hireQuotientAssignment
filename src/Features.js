import React from 'react'
import data from './data'
import Featurecard from './Featurecard'

export default function Features() {



    return (
        <div className='s3-container'>
            <div className='s1-capsule'>
                And So much more... 💼
            </div>
            <p className="s3-heading" style={{width:'80%'}}>Our features to make your life easier</p>
            
            <div className='feature-card-container'>
                {data.map((cd,i)=>{
                    return <Featurecard data={cd} index={i}/>
                })}
            </div>

        </div>
    )
}
