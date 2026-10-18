import UserCard from "../../components/UserCard"

const UsersPage = async () => {
  const res = await fetch(`http://localhost:5000/user`)
  const users = await res.json()
  return (
    <div>
      <h2>Users: {users.length}</h2>
      {users.map((user) => (
        <UserCard key={user._id} user={user}></UserCard>
      ))}
    </div>
  )
}

export default UsersPage
