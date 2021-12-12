import React, { useEffect, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { format } from "date-fns";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";

function Traininglist() {
  const [trainings, setTrainings] = useState([]);


  useEffect(() => {
    fetchTrainings();
  }, []);

  const fetchTrainings = () => {
    fetch("https://customerrest.herokuapp.com/gettrainings")
      .then((response) => response.json())
      .then((data) => setTrainings(data))
      .catch((err) => console.error(err));
  };

  const columns = [
    {
      field: "date",
      valueGetter: (params) => {
        return format(new Date(params.data.date), "dd.MM.yyyy hh:mm aaa");
      },
      sortable: true,
      filter: true,
    },
    { field: "duration", sortable: true, filter: true },
    { field: "activity", sortable: true, filter: true },
    {
      headerName: "Customer",
      minWidth: 90,
      valueGetter: (params) => {
        if (params.data.customer == null) {
          return "";
        } else if (params.data.customer.lastname == null) {
          return params.data.customer.firstname;
        } else if (params.data.customer.firstname == null) {
          return params.data.customer.lastname;
        } else {
          return (
            params.data.customer.lastname + " " + params.data.customer.firstname
          );
        }
      },
      sortable: true,
      filter: true,
    },
  ];

  return (
    <React.Fragment>
      <div
        className="ag-theme-material"
        style={{ height: 600, width: "80%", margin: "auto" }}
      >
        <AgGridReact
          rowData={trainings}
          columnDefs={columns}
          pagination={true}
          paginationPageSize={15}
          suppressCellSelection={true}
        />
      </div>
    </React.Fragment>
  );
}

export default Traininglist;
