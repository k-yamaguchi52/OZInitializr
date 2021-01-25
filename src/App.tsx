import React, { FC } from "react";
import logo from "./logo.svg";
import "./App.css";
import CrawlIniCommon from "./components/crawlIni/common";
import CrawlIniPagenation from "./components/crawlIni/pagenation";
import NavigationBar from "./components/Navigation";
import CrawlIniDetailPage from "./components/crawlIni/detailPage";
import { createStyles, Divider, Grid, makeStyles, Theme } from "@material-ui/core";
import CrawlIniPage from "./components/crawlIni/page";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

const App: FC = () => {
  const classes = useStyles();

  return (
    <div className="App">
      <NavigationBar></NavigationBar>
      <CrawlIniPage></CrawlIniPage>
      {/* <Grid container className={classes.root} direction="row" justify="space-evenly">
        <Grid item xs>
          <CrawlIniCommon></CrawlIniCommon>
        </Grid>
        <Divider orientation="vertical" flexItem></Divider>
        <Grid item xs>
          <CrawlIniPagenation></CrawlIniPagenation>
        </Grid>
        <Divider orientation="vertical" flexItem></Divider>
        <Grid item xs>
          <CrawlIniDetailPage></CrawlIniDetailPage>
        </Grid>
      </Grid> */}
      {/* <CrawlIniCommon></CrawlIniCommon>
      <CrawlIniPagenation></CrawlIniPagenation>
      <CrawlIniDetailPage></CrawlIniDetailPage> */}
    </div>
  );
};

export default App;
