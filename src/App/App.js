import './App.css';
import theme from '../styles/theme';
import { CssBaseline, makeStyles, ThemeProvider } from '@material-ui/core';
import SideMenu from '../components/SideMenu';
import Header from '../components/Header';
import Employees from '../pages/Employees/Employees';

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%',
  }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
})

const App = () => {

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
        <Employees />
      </div>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
