import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";

import "./App.css";
import home from "./Pages/home";
import login from "./Pages/login";
import signup from "./Pages/signup";
import Navbar from "./Components/Navbar";
import { Switch as Toogle, FormControlLabel } from "@material-ui/core";

const themeObject = {
  palette: {
    type: "dark",
    primary: {
      light: "#33c9dc",
      main: "#00bcd4",
      dark: "#008394",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff6333",
      main: "#ff3d00",
      dark: "#b22a00",
      contrastText: "#fff",
    },
  },
};
const useDarkMode = () => {
  const [theme, setTheme] = useState(themeObject);
  const {
    palette: { type },
  } = theme;
  const toogleDarkMode = () => {
    console.log(theme);
    const updatedTheme = {
      ...theme,
      palette: {
        ...theme.palette,
        type: type === "light" ? "dark" : "light",
      },
    };
    setTheme(updatedTheme);
  };
  return [theme, toogleDarkMode];
};

function App() {
  const [currTheme, toogleDarkMode] = useDarkMode();

  const theme = createMuiTheme(currTheme);
  return (
    <MuiThemeProvider theme={theme}>
      <FormControlLabel control={<Toogle onClick={toogleDarkMode} />} />

      {/* <div className="App">
        <Router>

          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={home}></Route>
              <Route exact path="/login" component={login}></Route>
              <Route exact path="/signup" component={signup}></Route>
            </Switch>
          </div>
        </Router>
      </div> */}
    </MuiThemeProvider>
  );
}

export default App;
