import React from "react";

// original approach
export const UserContext1 = React.createContext();

export default function App() {
  return (
    <UserContext1.Provider value="Reed">
      <User />
    </UserContext1.Provider>
  );
}

function User() {
  return (
    <UserContext1.Consumer>
      {(value) => <h1>{value}</h1>}
      {/* prints: Reed */}
    </UserContext1.Consumer>
  );
}

// with hook
// export const UserContext2 = React.createContext()

// export default function App() {
//   return (
//     <UserContext2.Provider value="Reed">
//       <User />
//     </UserContext2.Provider>
//   )
// }

// function User() {
//   const value = React.useContext(UserContext2)

//   return <h1>{value}</h1>
// }
