import React from 'react';
import {useGlobalContext} from './context'

const Stories = ()=>{
    const {hits,removeStory,readMore} = useGlobalContext();
    console.log("HITS: ", hits)
    return <section className="stories">
        {hits.map((story)=>{
            
            const {objectID,title,url,author,points,num_comments} = story;
            
            return (
            <div className="single-story">
            <article className="story">
            <div div className="story-title">
            <h4>{title ? title:'No title available'}</h4>
            </div>
            <div className="story-col">
            <p>{points} points by {author} | {num_comments} comments |</p>
            </div>
            <button  className="story-btn"onClick={()=>removeStory(objectID)}> Remove </button>
            <a className="story-link" href={url} target="_blank" rel="noopener noreferrer">| Read More</a>
            </article>
            <article className="story-text">
            
            </article>
            </div>
            
           
            
            )
            
        })}
    </section>
}

export default Stories