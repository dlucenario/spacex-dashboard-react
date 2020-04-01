import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import Layout from './Layout/Layout';

const theme = createMuiTheme({
  typography : {
    fontFamily: "Lato"
  },
  // palette: {
  //   primary: {
  //     // main: red[500],
  //   },
  //   secondary: {
  //     // // This is green.A700 as hex.
  //     // main: orange[500],
  //   },
  // },
});

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ThemeProvider theme = {theme}> 
          <Layout></Layout>
        </ThemeProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
