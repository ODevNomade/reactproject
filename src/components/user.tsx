const user = {
    name: 'Samuel',
    lastName: 'Melo',
}

function User() {
    return <span>{`${user.name} ${user.lastName}`}</span>
}

export default User;
