import React from 'react'


const Article = (props)=>{
    return (
        <div>         
                <h1>{props.data.title}</h1>
                <p>{props.data.body}</p>
            
        </div>
    )
}

export default Article;