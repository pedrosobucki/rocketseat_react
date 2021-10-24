import { RepositoryItem } from "./RepositoryItem"
import { useEffect } from "react"
import { useState } from "react"

import '../styles/repositories.scss'

interface Repository {
    name: string
    description: string
    html_url: string
}

export function RepositoryList(){
    const [repositories, setRepositories] = useState<Repository[]>([])

    useEffect(() => {

        fetch('https://api.github.com/users/pedrosobucki/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))

    }, [])

    return (<section className="repository-list">

        <h1>Repository List</h1>

        <ul>
            {repositories.map(repository => {
                return <RepositoryItem key={repository.name} repository={repository}/>
            })}
        </ul>

    </section>)
}