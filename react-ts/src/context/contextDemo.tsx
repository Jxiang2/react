import React, { createContext } from "react";

// with JSX
export const UserContext1 = createContext<string>("");

export function AppWithJsx() {
  return (
    <UserContext1.Provider value="Reed">
      <UserWithJSx />
    </UserContext1.Provider>
  );
}

function UserWithJSx() {
  return (
    <UserContext1.Consumer>
      {(value) => (
        <div>
          access value from context
          <h1>{value}</h1>
        </div>
      )}
    </UserContext1.Consumer>
  );
}

// with hook
export const UserContext2 = createContext<string>("");

export function AppWithHook() {
  return (
    <UserContext2.Provider value="Reed">
      <UserWithHook />
    </UserContext2.Provider>
  );
}

function UserWithHook() {
  const value = React.useContext(UserContext2);
  return (
    <div>
      access value from context
      <h1>{value}</h1>
    </div>
  );
}
