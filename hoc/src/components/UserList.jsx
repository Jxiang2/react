import React from 'react'
import HOC from "../hocs/withFilterData"

const UserList = ({ data }) => {

  let usersToRender = data.map(user => (
    <div key={user.id}>
      <p><strong>{user.name}</strong></p>
    </div>
  ))

  return (
    <div>
      <div>{usersToRender}</div>
    </div>
  )
}

const SearchedUsers = HOC(UserList, "users")
export default SearchedUsers