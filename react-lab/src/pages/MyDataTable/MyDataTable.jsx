import React, { useState, useCallback, useMemo } from "react";
import DataTable from "react-data-table-component";
import differenceBy from "lodash/differenceBy";
const columns = [
  {
    name: "Title",
    selector: (row) => row.title,
  },
  {
    name: "Year",
    selector: (row) => row.year,
  },
];

const testData = [
  {
    id: 1,
    title: "Beetlejuice",
    year: "1988",
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
  },
  {
    id: 3,
    title: "Star Wars: Episode III - Revenge of the Sith",
    year: "2005",
  },
  {
    id: 4,
    title: "Star Wars: Episode IV - A New Hope",
    year: "1977",
  },
  {
    id: 5,
    title: "The Empire Strikes Back",
    year: "1980",
  },
  {
    id: 6,
    title: "Return of the Jedi",
    year: "1983",
  },
];

export default function MyDataTable() {
  const [selectedRows, setSelectedRows] = useState([]);
  const [toggleCleared, setToggleCleared] = useState(false);
  const [data, setData] = useState(testData);

  const handleRowSelected = useCallback((state) => {
    setSelectedRows(state.selectedRows);
  }, []);

  const handleDelete = useCallback(() => {
    setToggleCleared(!toggleCleared);
    setData(differenceBy(data, selectedRows, "title"));
  }, [data, selectedRows, toggleCleared]);

  const contextActions = useMemo(() => {
    return <button onClick={handleDelete}>Delete</button>;
  }, [handleDelete]);

  return (
    <>
      <DataTable
        title="Table"
        columns={columns}
        data={data}
        selectableRows
        contextActions={contextActions}
        onSelectedRowsChange={handleRowSelected}
        clearSelectedRows={toggleCleared}
        pagination
      />
    </>
  );
}
