import { Link, Outlet } from "react-router-dom";

function Dashboard() {
    return (
        <div>
            <h2>Páginas que você pode acessar</h2>
            <nav>
                <ul>
                    <li><Link to="overview">Overview</Link></li>
                    <li><Link to="settings">Settings</Link></li>
                    <li><Link to="reports">Reports</Link></li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default Dashboard