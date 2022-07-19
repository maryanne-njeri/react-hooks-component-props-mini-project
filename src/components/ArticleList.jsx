import React from 'react'
import Article from "./Article.jsx"


const ArticleList = ({posts}) => {
    const article = posts.map((item) => {

    return <Article key={item.id} title={item.title} data={item.data} preview={item.preview} minutes={item.minutes} />}
    )
    return (
        <main>{article}</main>
    ) 
}

export default ArticleList