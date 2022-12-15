import React, { useState } from "react";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import {
  QUERY_ALL_MOVIES,
  QUERY_ALL_USERS,
  GET_MOVIE_BY_NAME,
  CREATE_USER,
} from "./queries";

export default function DisplayData() {
  const [movieSearched, setMovieSearched] = useState("");

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [age, setAge] = useState(0);
  const [nationality, setNationality] = useState("");

  // queries
  const {
    data: userData,
    loading: userLoading,
    refetch: refetchUsers,
  } = useQuery(QUERY_ALL_USERS);

  const [fetchMovie, { data: movieSearchData, error: movieFetchError }] =
    useLazyQuery(GET_MOVIE_BY_NAME);

  const { data: movieData, loading: moiveLoading } = useQuery(QUERY_ALL_MOVIES);

  // mutations
  const [createUser] = useMutation(CREATE_USER);

  return (
    <div>
      <input
        type="text"
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <input
        type="text"
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <input
        type="number"
        placeholder="age"
        onChange={(e) => setAge(e.target.value)}
        value={age}
      />
      <input
        type="text"
        placeholder="nationality"
        onChange={(e) => setNationality(e.target.value.toLocaleUpperCase())}
        value={nationality}
      />

      <button
        onClick={(e) => {
          createUser({
            variables: {
              createUserinput: {
                name,
                username,
                age: Number(age),
                nationality,
              },
            },
          });
          setName("");
          setUsername("");
          setAge(0);
          setNationality("");
          refetchUsers();
        }}
      >
        Create User
      </button>

      <h1>Display Data</h1>
      {!userLoading &&
        userData.users.data.map((user) => (
          <div key={user.id}>
            <h1>Name: {user.name}</h1>
            <h1>Name: {user.age}</h1>
            <h1>Name: {user.username}</h1>
            <h1>Name: {user.nationality}</h1>
            <h1>############################</h1>
          </div>
        ))}

      <h1>############################</h1>
      <h1>############################</h1>

      {!moiveLoading &&
        movieData.movies.data.map((mo) => (
          <div key={mo.id}>
            <h1>Name: {mo.name}</h1>
            <h1>Name: {mo.yearOfPublication}</h1>
            <h1>############################</h1>
          </div>
        ))}

      <input
        type="text"
        placeholder="Interstellar..."
        onChange={(e) => {
          setMovieSearched(e.target.value);
        }}
        value={movieSearched}
      />

      <button
        onClick={() => {
          console.log("lazy fetching ...");
          fetchMovie({ variables: { name: movieSearched } });
        }}
      >
        Fetch Data
      </button>

      {movieSearchData && movieSearchData.movie.data && (
        <div>
          <h1>Movie name: {movieSearchData.movie.data.name}</h1>
          <h1>
            Year of Publication: {movieSearchData.movie.data.yearOfPublication}
          </h1>
        </div>
      )}

      {movieSearchData && movieSearchData.movie.error && (
        <div>
          <h1>{movieSearchData.movie.error}</h1>
        </div>
      )}

      {movieFetchError && <h1>There was a error fetching the movie</h1>}
    </div>
  );
}
