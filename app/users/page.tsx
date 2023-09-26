import React from "react";

// define interface to determine 'user' type otherwise it will default to any
interface User {
  id: number;
  name: string;
  email: string;
}

const UsersPage = async () => {
  // state an end point for the data to come from, it is held in a promise so we must await the data, and turn the function into async
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const users: User[] = await res.json();

  // map the users to a bunch of list items, exactly like how its rendered in a react application
  return (
    <>
      <h1>Users</h1>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UsersPage;
