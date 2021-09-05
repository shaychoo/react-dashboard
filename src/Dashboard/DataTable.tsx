import * as React from "react";
import {
  DataGrid,
  GridColDef,
  GridValueGetterParams
} from "@material-ui/data-grid";
import { Card, CardContent } from "@material-ui/core";
import { GRID_DEFAULT_LOCALE_TEXT } from "./GridTranslation";
import { useStoreState } from "easy-peasy";

const columns: GridColDef[] = [
  { field: "gender", headerName: "ID", width: 100 },
  {
    field: "email",
    headerName: "First name",
    width: 150,
    editable: true
  },
  {
    field: "cell",
    headerName: "Last name",
    width: 150,
    editable: true
  },
  {
    field: "nat",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true
  },
  {
    field: "title",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: true,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.getValue(params.id, "firstName") || ""} ${
        params.getValue(params.id, "lastName") || ""
      }`
  }
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 }
];

export default function DataTable() {
  const dataValues = useStoreState((state) => state.chartsData.filterdData);
  console.log("d", dataValues[0]);
  const rows = dataValues.map((a) => {
    return {
      gender: a.gender,
      email: a.email,
      cell: a.cell,
      nat: a.nat,
      firstName: a.name.first,
      lastName: a.name.last,
      id: Math.random()
    };
  });
  return (
    <div style={{ height: 400, width: "100%" }}>
      <Card>
        <CardContent style={{ height: 800, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            disableSelectionOnClick
            localeText={GRID_DEFAULT_LOCALE_TEXT}
          />
        </CardContent>
      </Card>
    </div>
  );
}
