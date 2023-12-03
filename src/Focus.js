import React from 'react'

export default function
    () {
    return (
        <div className='s3-container'>
            <div className='s3-content'>
                <div className='s3-content-left' style={{ gap: '30px' }}>
                    <div className='s3-capsule bg-1' style={{backgroundColor:'#ddf4e4'}}>Seamless Scheduling</div>
                    <div className='s3-left-heading' style={{ fontSize: "40px", fontWeight: "800", lineHeight: "130%", textAlign: 'left', margin: '10px 0' }}>Focus on what matters most for you</div>
                    <div className='s3-left-text' style={{ fontSize: '20px', fontWeight: '400', lineHeight: '32px', textAlign: 'left', color: '#6b6b78' }}>Effortlessly plan your day with our intuitive drag-and-drop interface. Sync with multiple calendar platforms, import events from emails, and add participants with just a few clicks.</div>
                    <div className='s3-left-card'>
                        <div className='s3-card-avatar'></div>
                        <div className='s3-card-board' style={{ backgroundColor: "#2e2e2e", borderRadius: '16px 16px 16px 4px', width: '60%', padding: '20px', position: 'relative', left: '100px' }}>
                            <div style={{ color: 'white', fontWeight: '600', lineHeight: '22px', textAlign: 'left' }}>
                                I've tried a lot of calendar apps, but this one is by far the best! It's so intuitive and customizable, and it has all the features I need.
                            </div>
                            <div style={{ color: '#ffffff40', textAlign: 'left' }}>
                                Annie, Designer

                            </div>
                            <div style={{ position: 'absolute', right: '340px', bottom: '-35px' }}>
                                <img style={{ width: '80px', height: '80px' }} src='https://framerusercontent.com/images/1OwzdZHx9ElDw1ZAavs6WGWBSw.png'></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='s3-content-right'>
                    <img style={{ height: '100%', width: '100%' }} src='https://framerusercontent.com/images/xjG69OjCFt0Z3YQvNa3HNBBP5G0.png'></img>
                </div>
            </div>
        </div>
    )
}
