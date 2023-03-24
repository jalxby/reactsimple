import React, {useState} from "react";

export default {
    title: 'React.memo demo'
}

const NewMessagesCounter = (props: { count: number }) => {
    return <div>
        {props.count}
    </div>
}

const Users = (props: { users: Array<string> }) => {
    console.log('Rendering users')
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const UsersMemoWrapper = React.memo(Users)
const NewMessagesCounterWrapper = React.memo(NewMessagesCounter)

export const Example1 = () => {
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState(['Alexander', 'Valery', 'Ja'])
    return (
        <>
            <NewMessagesCounterWrapper count={count}/>
            <UsersMemoWrapper users={users}/>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setUsers([...users, 'Sveta ' + new Date()])}>add user</button>

        </>
    )
}

