
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([])
  const [page, setPage] = useState('home')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.log(error))
  }, [])

  return (
    <div className="app">
      <nav className="navbar">
        <h2>Employee Portal</h2>

        <div>
          <button onClick={() => setPage('home')}>
            Home
          </button>

          <button onClick={() => setPage('form')}>
            Employee Form
          </button>
        </div>
      </nav>

      <main className="container">
        {page === 'home' ? (
          <>
            <h1>Employee Dashboard</h1>
            <p>View employee details below.</p>

            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
              </thead>

              <tbody>
                {users.map(user => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <>
            <h1>Employee Form</h1>

            <form onSubmit={event => event.preventDefault()}>
              <label>Name</label>
              <input type="text" placeholder="Enter name" required />

              <label>Designation</label>
              <input type="text" placeholder="Enter designation" required />

              <label>Location</label>
              <input type="text" placeholder="Enter location" required />

              <label>Salary</label>
              <input type="number" placeholder="Enter salary" required />

              <button type="submit">Submit</button>
            </form>
          </>
        )}
      </main>
    </div>
  )
}

export default App
