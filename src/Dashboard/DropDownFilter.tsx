import React from "react";
import {
  createStyles,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    },
    selectEmpty: {
      marginTop: theme.spacing(2)
    },
    FilterPanel: {
      marginBottom: theme.spacing(1),
      minWidth: 120
    }
  })
);

const DropDownFilter = () => {
  const classes = useStyles();

  const options: DropDownFilterOption[] = [
    { value: "10", label: "op1" },
    { value: "20", label: "op2" },
    { value: "30", label: "op3" }
  ];

  return (
    <FormControl className={classes.FilterPanel}>
      <InputLabel id="demo-simple-select-label">מחלקה</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        // value={age}
        // onChange={handleChange}
      >
        <MenuItem value={-1}>הכול</MenuItem>
        {options?.map((o) => (
          <MenuItem key={o.value} value={o.value}>
            {o.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

interface DropDownFilterOption {
  value: any;
  label: string;
}
export default DropDownFilter;
