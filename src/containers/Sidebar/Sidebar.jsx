import React from 'react'


const Sidebar = (props)=>{
    return (
        <div>         
                <a href={props.data.href}>
                    {props.data.title}
                </a>
            
        </div>
    )
}

export default Sidebar;