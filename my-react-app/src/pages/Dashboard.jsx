import { useAuth } from "../contexts/AuthContext";


function Dashboard() {
    const { user } = useAuth();

    return (
        <>
            <h2>Dashboard</h2>
            <p>Welcome {user.username}</p>

            <ul>
                <li>Tasks completed: 12</li>
                <li>Projects: 3</li>
                <li>Logged in at: {user.loggedInAt}</li>
            </ul>
        </>
    )
}

export default Dashboard;
