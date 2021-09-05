import React, { useState } from "react";
import {
  makeStyles,
  withStyles,
  Theme,
  createStyles
} from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

const AntTabs = withStyles({
  root: {
    // border: "1px solid #e8e8e8",
    width: "auto"
  },
  indicator: {
    backgroundColor: "#1890ff"
  }
})(Tabs);

const AntTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      textTransform: "none",

      minWidth: 20,
      fontWeight: theme.typography.fontWeightRegular,
      marginRight: theme.spacing(2),
      fontFamily: [
        '"Segoe UI"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
      ].join(","),
      "&:hover": {
        color: "#40a9ff",
        opacity: 1,
        backgroundColor: "#efefef"
      },
      "&$selected": {
        color: "#1890ff",
        fontWeight: theme.typography.fontWeightMedium
      },
      "&:focus": {
        color: "#40a9ff"
      }
    },
    selected: {}
  })
)((props: StyledTabProps) => <Tab disableRipple {...props} />);

// interface StyledTabsProps {
//   value: number;
//   onChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
// }

// const StyledTabs = withStyles({
//   indicator: {
//     display: "flex",
//     justifyContent: "center",
//     backgroundColor: "transparent",
//     "& > span": {
//       maxWidth: 40,
//       width: "100%",
//       backgroundColor: "#635ee7"
//     }
//   }
// })((props: StyledTabsProps) => (
//   <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />
// ));

interface StyledTabProps {
  label: string;
}

// const StyledTab = withStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       textTransform: "none",
//       color: "#fff",
//       fontWeight: theme.typography.fontWeightRegular,
//       fontSize: theme.typography.pxToRem(10),
//       marginRight: theme.spacing(1),
//       "&:focus": {
//         opacity: 1
//       }
//     }
//   })
// )((props: StyledTabProps) => <Tab disableRipple {...props} />);

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2)
  },

  demo1: {
    backgroundColor: theme.palette.background.paper
  }
}));

export default function TabFilter(props: any) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const lables = props.lables; //["a1", "a2", "a3", "a4"];
  const HasAll = props.HasAll !== false;

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
    let newValObj = {
      [props.name]: newValue === 0 ? -1 : lables[newValue - 1]
    };
    props.OnChange(newValObj);
  };

  return (
    <div className={classes.root}>
      <div className={classes.demo1}>
        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
          {HasAll === true ? <AntTab label="הכול" /> : ""}
          {lables?.map((a) => (
            <AntTab key={a} label={a} />
          ))}
        </AntTabs>
        <Typography className={classes.padding} />
      </div>
    </div>
  );
}
