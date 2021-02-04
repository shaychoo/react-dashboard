import * as React from "react";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  createStyles,
  makeStyles,
  Grid,
  Theme,
  ButtonGroup,
  Button
} from "@material-ui/core";
import FilterIcon from "@material-ui/icons/FilterList";

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
      marginBottom: theme.spacing(1)
    }
  })
);

const Filter = () => {
  const classes = useStyles();
  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-simple-select-label">מחלקה</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        // value={age}
        // onChange={handleChange}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
};

const FilterPanel = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState([]);

  const handleChange = (val: number) => {
    let x = [];
    x[val] = value[val] === "contained" ? "" : "contained";

    setValue(x);
  };
  return (
    <Accordion className={classes.FilterPanel}>
      <AccordionSummary
        color="primary"
        expandIcon={<FilterIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>סינון</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container>
          <Grid item xs={1}></Grid>
          <Grid item xs={2}>
            <Filter />
          </Grid>
          <Grid item xs={2}>
            <Filter />
          </Grid>
          <Grid item xs={2}>
            <Filter />
          </Grid>
          <Grid item xs={2}>
            <Filter />
          </Grid>
          <Grid item xs={2}>
            <Filter />
          </Grid>
          <Grid item xs={5}>
            <Typography>סינון</Typography>

            <ButtonGroup
              color="primary"
              aria-label="outlined primary button group"
            >
              <Button
                onClick={() => {
                  handleChange(1);
                }}
                variant={value[1]}
              >
                One
              </Button>
              <Button
                onClick={() => {
                  handleChange(2);
                }}
                variant={value[2]}
              >
                Two
              </Button>
              <Button
                onClick={() => {
                  handleChange(3);
                }}
                variant={value[3]}
              >
                Three
              </Button>
            </ButtonGroup>

            {/* <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
              >
                <Tab label="Active" />
                <Tab label="Disabled" />
                <Tab label="Active" />
              </Tabs> */}
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};
export default FilterPanel;
