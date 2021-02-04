import * as React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";
// import Dashboard from "./Dashboard/Dashboard";
import { StoreProvider } from "easy-peasy";
import store from "./store";
import Layout from "./Layout";
import Rtl from "./Utils/Rtl";
import "./styles.css";

const App = () => {
  const theme = createMuiTheme({
    direction: "rtl"
  });
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <StoreProvider store={store}>
          <Rtl>
            <Layout />
            {/* <Dashboard />
          <TextField id="standard-basic" label="Standard" /> */}
          </Rtl>
        </StoreProvider>
      </ThemeProvider>
    </div>
  );
};

export default App;
