import { gql } from "@apollo/client";

export const QUERY_ALL_USERS = gql`
  query GetAllUsers {
    users {
      ... on UsersSuccessfulResult {
        data {
          id
          name
          username
          age
          nationality
        }
      }
      ... on UsersErrorResult {
        error
      }
    }
  }
`;

export const QUERY_ALL_MOVIES = gql`
  query GetAllMovies {
    movies {
      ... on MoviesSuccessfulResult {
        data {
          id
          name
          yearOfPublication
          isInTheaters
        }
      }
      ... on MoviesErrorResult {
        error
      }
    }
  }
`;

export const GET_MOVIE_BY_NAME = gql`
  query GetMovieByName($name: String!) {
    movie(name: $name) {
      ... on MovieSuccessfulResult {
        data {
          name
          yearOfPublication
          isInTheaters
        }
      }
      ... on MovieErrorResult {
        error
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUSer($createUserinput: CreateUserInput!) {
    createUser(createUserinput: $createUserinput) {
      id
      name
      username
      age
      nationality
    }
  }
`;
