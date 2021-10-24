export function RepositoryItem(props){
    return (
        <li>
            <strong>{props.repository?.name ?? 'Name'}</strong>
            <p>{props.repository?.description ?? 'description'}</p>
            <a href={props.repository?.link ?? '#'}>
                access repository
            </a>
        </li>
    )
}