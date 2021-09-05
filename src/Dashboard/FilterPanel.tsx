import * as React from "react";
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  createStyles,
  makeStyles,
  Grid,
  Theme
} from "@material-ui/core";
import FilterIcon from "@material-ui/icons/FilterList";
import TabFilter from "./TabFilter";
import DropDownFilter from "./DropDownFilter";
import { useStoreActions } from "../store";

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

const FilterPanel = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState([]);
  const applyFilter = useStoreActions(
    (actions) => actions.chartsData.applyFilte
  );

  const handleChange = (val: number) => {
    let x = [];
    x[val] = value[val] === "contained" ? "" : "contained";

    setValue(x);
  };

  const TabHandleChange = (val: string) => {
    applyFilter(val);
  };

  return (
    <Accordion className={classes.FilterPanel}>
      <AccordionSummary
        color="primary"
        // expandIcon={}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <FilterIcon style={{ margin: "0 auto" }} />
        {/* <Typography>סינון</Typography> */}
      </AccordionSummary>
      <AccordionDetails>
        <Grid container>
          <Grid item xs={1}></Grid>
          <Grid item xs={2}>
            <DropDownFilter />
          </Grid>
          <Grid item xs={2}>
            <DropDownFilter />
          </Grid>
          <Grid item xs={2}>
            <DropDownFilter />
          </Grid>
          <Grid item xs={2}>
            <DropDownFilter />
          </Grid>
          <Grid item xs={2}>
            <DropDownFilter />
          </Grid>
          <Grid item xs={4}>
            <Typography>דיון</Typography>

            {/* <ButtonGroup
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
            </ButtonGroup> */}

            <TabFilter
              lables={["Mr", "Mrs", "Miss", "Madame", "Monsieur"]}
              OnChange={TabHandleChange}
              name="title"
            />
          </Grid>
          <Grid item xs={4}>
            <Typography>YYY</Typography>
            <TabFilter
              lables={["female", "male"]}
              OnChange={TabHandleChange}
              name="gender"
            />
          </Grid>

          {/* <Grid item xs={4}>
            <Typography>סינון</Typography>
            <TabFilter lables={["a1", "a2", "a3"]} />
          </Grid> */}
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};
export default FilterPanel;
