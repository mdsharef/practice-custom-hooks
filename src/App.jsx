import useFetchData from "./hooks/useFetchData";

const App = () => {
    const {data: users, loading: userLoading, error: userError} = useFetchData(`https://jsonplaceholder.typicode.com/users`, 
        (data)=> data.map(item=> ({id: item.id, name: item.name}))
    );

    const {data: posts, loading: postLoading, error: postError} = useFetchData(`https://jsonplaceholder.typicode.com/posts`,
        (data) => data.slice(0, 10).map(item => ({id: item.id, title: item.title}))
    );

    const comments = useFetchData(`https://jsonplaceholder.typicode.com/comments`,
        (data) => data.slice(0, 10).map(item => ({id: item.id, name: item.name}))
    );

    return (
        <div style={{width: '850px', display: 'flex', gap: '1rem', justifyContent: 'space-between'}}>
            <div>
                <h3>Users</h3>
                <hr />
                {userLoading && <p>Loading...</p>}
                {userError && <p>{userError}</p>}
                {users && <ul>
                    {users.map(user => <li key={user.id}>{user.name}</li>)}
                </ul>}
            </div>
            <div>
                <h3>Posts</h3>
                <hr />
                {postLoading && <p>Loading...</p>}
                {postError && <p>{postError}</p>}
                {posts && <ul>
                    {posts.map(post => <li key={post.id}>{post.title}</li>)}
                </ul>}
            </div>
            <div>
                <h3>Comments</h3>
                <hr />
                {comments.loading && <p>Loading...</p>}
                {comments.error && <p>{comments.error}</p>}
                {comments.data && <ul>
                    {comments.data.map(comment => <li key={comment.id}>{comment.name}</li>)}
                </ul>}
            </div>
        </div>
    )
}

export default App;