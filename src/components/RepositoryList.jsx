import { RepositoryItem } from "./RepositoryItem"
import '../styles/repositories.scss'

const repository = {
    name: 'Unform',
    description: 'Forms in React',
    link: 'https://github.com/unform/unform'
}

export function RepositoryList(){
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