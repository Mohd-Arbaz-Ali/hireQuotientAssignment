import React from 'react'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { useState } from 'react';

export default function Calendarsec() {
    const [isMouse1, setisMouse1] = useState(false);
    const [isMouse2, setisMouse2] = useState(false);
    const [isMouse, setisMouse] = useState(false);
    const [isMouse3, setisMouse3] = useState(false);
    const [isMouse4, setisMouse4] = useState(false);


    const handleImageLoad = () => {
        isMouse?setisMouse(false):setisMouse(true);
      };
    const handleImageLoad2 = () => {
        isMouse2?setisMouse2(false):setisMouse2(true);
      };
    const handleImageLoad3 = () => {
        isMouse3?setisMouse3(false):setisMouse3(true);
      };
    const handleImageLoad4 = () => {
        isMouse4?setisMouse4(false):setisMouse4(true);
      };
    const handleImageLoad1 = () => {
        isMouse1?setisMouse1(false):setisMouse1(true);
      };
    const imageSrc = isMouse
    ? 'icon.svg'
    : 'avatar.png';
    const imageSrc1 = isMouse1
    ? 'icon.svg'
    : 'avatar.png';
    const imageSrc2 = isMouse2
    ? 'icon.svg'
    : 'avatar.png';
    const imageSrc3 = isMouse3
    ? 'icon.svg'
    : 'avatar.png';
    const imageSrc4 = isMouse4
    ? 'icon.svg'
    : 'avatar.png';

    return (
        <div className='s1-container'>
            <div className='s1-capsule'>
                An other way to manage time
            </div>
            <div className='s1-heading container'>
                <span className='s1-heading'>Your new favorite Calendar</span>
                <span className='s1-heading'>🗓️</span>
                <span className='s1-heading'>app</span>
            </div>
            <div className='s1-content'>
                Here you should explain how cool your app is. Remember, focus on the benefits for your users, not on the features.
            </div>
            <div>
                <button variant="dark" className='s1-button'>Get Started, It's free</button>
                <div className='s1-button-text'>Free 14 days trials,no credit card needed</div>
            </div>
            <div className='flex'>

                <div>
                    <AvatarGroup total={5}>
                        <Avatar alt="Remy Sharp" onMouseEnter={handleImageLoad} onMouseLeave={handleImageLoad} src={imageSrc} />
                        <Avatar alt="Remy Sharp" onMouseEnter={handleImageLoad1} onMouseLeave={handleImageLoad1} src={imageSrc1} />
                        <Avatar alt="Remy Sharp" onMouseEnter={handleImageLoad2} onMouseLeave={handleImageLoad2} src={imageSrc2} />
                        <Avatar alt="Remy Sharp" onMouseEnter={handleImageLoad3} onMouseLeave={handleImageLoad3} src={imageSrc3} />
                        <Avatar alt="Remy Sharp" onMouseEnter={handleImageLoad4} onMouseLeave={handleImageLoad4} src={imageSrc4} />
                    </AvatarGroup>
                </div>
                <div className="s1-card flex flex-col space-y-0.5 justify-center" style={{ height: "auto" }}>
                    <div className="flex items-end gap-1.5 -ml-0.5">
                        <div className="flex gap-1 ">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5 flex-shrink-0" style={{ color: "rgb(254,200,75)" }}>
                                <path d="M11.538 1.71a.5.5 0 01.923 0l2.596 6.24a.5.5 0 00.421.306l6.736.54a.5.5 0 01.286.878l-5.133 4.396a.5.5 0 00-.16.496l1.567 6.573a.5.5 0 01-.747.543l-5.767-3.523a.5.5 0 00-.52 0l-5.768 3.523a.5.5 0 01-.747-.543l1.568-6.573a.5.5 0 00-.16-.496L1.5 9.674a.5.5 0 01.285-.878l6.736-.54a.5.5 0 00.422-.307l2.595-6.239z"></path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5 flex-shrink-0" style={{ color: "rgb(254,200,75)" }}>
                                <path d="M11.538 1.71a.5.5 0 01.923 0l2.596 6.24a.5.5 0 00.421.306l6.736.54a.5.5 0 01.286.878l-5.133 4.396a.5.5 0 00-.16.496l1.567 6.573a.5.5 0 01-.747.543l-5.767-3.523a.5.5 0 00-.52 0l-5.768 3.523a.5.5 0 01-.747-.543l1.568-6.573a.5.5 0 00-.16-.496L1.5 9.674a.5.5 0 01.285-.878l6.736-.54a.5.5 0 00.422-.307l2.595-6.239z"></path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5 flex-shrink-0" style={{ color: "rgb(254,200,75)" }}>
                                <path d="M11.538 1.71a.5.5 0 01.923 0l2.596 6.24a.5.5 0 00.421.306l6.736.54a.5.5 0 01.286.878l-5.133 4.396a.5.5 0 00-.16.496l1.567 6.573a.5.5 0 01-.747.543l-5.767-3.523a.5.5 0 00-.52 0l-5.768 3.523a.5.5 0 01-.747-.543l1.568-6.573a.5.5 0 00-.16-.496L1.5 9.674a.5.5 0 01.285-.878l6.736-.54a.5.5 0 00.422-.307l2.595-6.239z"></path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5 flex-shrink-0" style={{ color: "rgb(254,200,75)" }}>
                                <path d="M11.538 1.71a.5.5 0 01.923 0l2.596 6.24a.5.5 0 00.421.306l6.736.54a.5.5 0 01.286.878l-5.133 4.396a.5.5 0 00-.16.496l1.567 6.573a.5.5 0 01-.747.543l-5.767-3.523a.5.5 0 00-.52 0l-5.768 3.523a.5.5 0 01-.747-.543l1.568-6.573a.5.5 0 00-.16-.496L1.5 9.674a.5.5 0 01.285-.878l6.736-.54a.5.5 0 00.422-.307l2.595-6.239z"></path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5 flex-shrink-0" style={{ color: "rgb(254,200,75)" }}>
                                <path d="M11.538 1.71a.5.5 0 01.923 0l2.596 6.24a.5.5 0 00.421.306l6.736.54a.5.5 0 01.286.878l-5.133 4.396a.5.5 0 00-.16.496l1.567 6.573a.5.5 0 01-.747.543l-5.767-3.523a.5.5 0 00-.52 0l-5.768 3.523a.5.5 0 01-.747-.543l1.568-6.573a.5.5 0 00-.16-.496L1.5 9.674a.5.5 0 01.285-.878l6.736-.54a.5.5 0 00.422-.307l2.595-6.239z"></path>
                            </svg>
                        </div>
                        <p className="text-base font-semibold leading-4" style={{ color: "rgb(16,24,40)", margin: "0" }}>5.0</p>
                    </div>
                    <p className="text-sm font-medium whitespace-nowrap" style={{ color: "rgb(71,84,103)", fontWeight: "500", fontSize: ".875rem", lineHeight: "1.25rem", margin: "0" }}>From 200+ happy users</p>
                </div>
            </div>
        </div>
    )
}
