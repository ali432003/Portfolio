import React from 'react'


export default function cardsSkills(props) {
    return (
        <div className='p-4 rounded-lg cursor-pointer hover:bg-slate-200 hover:scale-125 ease-in duration-300'>
            <img src={`src/assets/skills_icons/${props.img}`} alt="" />
        </div>
    )
}
