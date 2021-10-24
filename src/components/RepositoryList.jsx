const repositoryName = 'unset'

export function RepositoryList(){
    return <section className="repository-list">

        <h1>Repository List</h1>

        <ul>
            <li>
                <strong>{repositoryName}</strong>
                <p>Forms in React</p>
                <a href="#">
                    access repository
                </a>
            </li>

            <li>
                <strong>{repositoryName}</strong>
                <p>Forms in React</p>
                <a href="#">
                    access repository
                </a>
            </li>

            <li>
                <strong>{repositoryName}</strong>
                <p>Forms in React</p>
                <a href="#">
                    access repository
                </a>
            </li>
        </ul>

    </section>
}