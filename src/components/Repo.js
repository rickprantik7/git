import React from 'react'
import "../css/repo.css"

export default function Repo({repo}) {
    return (
        <div className="repos">
            <a href={repo.html_url} className="header" target="_blank">{repo.name}</a>
            <h4>{repo.description}</h4>
            <p>Fecth count : {repo.forks_count}</p>
            <p>Watchers count :{repo.watchers_count}</p>
        </div>
    )
}
