interface RepositoryItemProps {
    repository: {
        name: string
        description: string
        html_url: string
    }
}

export function RepositoryItem(props: RepositoryItemProps){
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