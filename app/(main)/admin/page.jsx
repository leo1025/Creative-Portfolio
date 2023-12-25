import './loginpage.css'

export default function Page() {
    return <div className="container login">
        <h1>Admin Login</h1>
        <label>
            Username:
            <input type="text" />
        </label>
        <br />
        <label>
            Password:
            <input type="password" />
        </label>
        <br />
        <button>Login</button>
    </div>
}