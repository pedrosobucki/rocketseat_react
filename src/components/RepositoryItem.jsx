export function RepositoryItem(props){
    return (
        <li>
            <strong>{props.repository?.name ?? 'Name'}</strong>
            <p>{props.repository?.description ?? 'description'}</p>
            <a href={props.repository?.html_url ?? '#'}>
                access repository
            </a>
        </li>
    )
}