import { RepositoryItem } from "./RepositoryItem"
import { useEffect } from "react"
import { useState } from "react"

import '../styles/repositories.scss'

//api.github.com/orgs/rocketseat/repos

const repository = {
    name: 'Unform',
    description: 'Forms in React',
    link: 'https://github.com/unform/unform'
}

export function RepositoryList(){
    const [repositories, setRepositories] = useState([])

    useEffect(() => {

        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))

    }, [])

    return (<section className="repository-list">

        <h1>Repository List</h1>

        <ul>
            <RepositoryItem repository={repository}/>
            <RepositoryItem />
            <RepositoryItem />
            <RepositoryItem />
        </ul>

    </section>)
}