import UserCard from "../../components/UserCard"

const UsersPage = async () => {
  const res = await fetch(`http://localhost:5000/user`)
  const users = await res.json()
  return (
    <div>
      <h2>Users: {users.length}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 container mx-auto">

      {users.map((user) => (
        <UserCard key={user._id} user={user}></UserCard>
      ))}
      </div>
    </div>
  )
}

export default UsersPage
