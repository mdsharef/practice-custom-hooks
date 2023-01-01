import { useEffect, useState } from "react";

const App = () => {
    const [users, setUsers] = useState([]);
    const [userLoading, setUserLoading] = useState(false);
    const [userError, setUserError] = useState('');
    const [posts, setPosts] = useState([]);
    const [postLoading, setPostLoading] = useState(false);
    const [postError, setPostError] = useState('');

    const fetchUsers = async () => {
        setUserLoading(true);
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
            const data = await res.json();
            setUsers(data);
            setUserError('');
            setUserLoading(false);
        } catch (e) {
            setUserError('Server error occurred while fetching users!');
            setUserLoading(false);
        }
    }

    const fetchPosts = async () => {
        setPostLoading(true);
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
            const data = await res.json();
            setPosts(data);
            setPostError('');
            setPostLoading(false);
        } catch (e) {
            setPostError('Server error occurred while fetching posts!');
            setPostLoading(false);
        }
    }

    // const fetchData = async (url, setLoading, setError, setData) => {
    //     setLoading(true);
    //     try {
    //         const res = await fetch(url);
    //         const result = await res.json();
    //         setData(result);
    //         setError('');
    //         setLoading(false);
    //     } catch (err) {
    //         setError(err.message);
    //         setLoading(false);
    //     }
    // }

    useEffect(() => {
        fetchUsers();
        fetchPosts();
    }, [])

    // useEffect(() => {
    //     fetchData(`https://jsonplaceholder.typicode.com/users`, setUserLoading, setUserError, setUsers);
    //     fetchData(`https://jsonplaceholder.typicode.com/posts`, setPostLoading, setPostError, setPosts);
    // },[]);

    return (
        <div style={{width: '650px', display: 'flex', gap: '1rem', justifyContent: 'space-between'}}>
            <div>
                <h3>Users</h3>
                <hr />
                {userLoading && <p>Loading...</p>}
                {userError && <p>{userError}</p>}
                {users && <ul>{users.map(user => <li key={user.id}>{user.name}</li>)}</ul>}
            </div>
            <div>
                <h3>Posts</h3>
                <hr />
                {postLoading && <p>Loading...</p>}
                {postError && <p>{postError}</p>}
                {posts && <ul>{posts.map(post => <li key={post.id}>{post.title}</li>)}</ul>}
            </div>
        </div>
    )
}

export default App;