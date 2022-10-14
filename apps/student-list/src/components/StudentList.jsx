import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import SearchBar from "./SearchBar";
import Student from "./Student";
// styles
import "./StudentList.css";

const url = "https://api.hatchways.io/assessment/students";

export default function StudentList() {
  const [name, setName] = useState("");
  const [setTag] = useState("");
  const { data, isPending, error } = useFetch(url);

  const filterByName = (searchedName) => {
    return searchedName.toLowerCase().includes(name.toLowerCase());
  };

  return (
    <div className="student-list">
      <br />
      <SearchBar setAttribute={setName} defaultContent="Search by name" />
      <br />
      <SearchBar setAttribute={setTag} defaultContent="Search by tag" />

      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}

      {data &&
        data.students
          .filter(
            (student) =>
              filterByName(student.firstName) ||
              filterByName(student.lastName) ||
              filterByName(student.firstName + " " + student.lastName),
          )
          .map((student) => <Student key={student.id} studentInfo={student} />)}
    </div>
  );
}
