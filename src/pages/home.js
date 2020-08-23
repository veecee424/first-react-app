import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MainContent from '../components/maincontent';
import TopMenu from '../components/topmenu';
import SideMenu from '../components/sidemenu';
import Footer from '../components/footer'

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
    },
  }));

function Home() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <TopMenu />
        <SideMenu />
        <MainContent />
        <Footer />
      </div>
    );
  }
  
  export default Home;