import React, { FC, useState } from "react";
import CrawlIniCommon from "../common";
import CrawlIniPagenation from "../pagenation";
import CrawlIniDetailPage from "../detailPage";
import {
  AppBar,
  Button,
  createStyles,
  Divider,
  Grid,
  makeStyles,
  Theme,
  Toolbar,
} from "@material-ui/core";
import CrawlIniPreviewDialog from "../previewDialog";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(3),
      marginBottom: "30px",
    },
    bottomBar: {
      top: "auto",
      bottom: 0,
    },
    generateButton: {
      margin: "0 auto",
    },
  })
);

const CrawlIniPage: FC = () => {
  const [crawlType, setCrawlType] = useState(2);
  const [useIgnoreList, setUseIgnoreList] = useState(1);
  const [interval, setInterval] = useState(500);
  const [threadCount, setThreadCount] = useState(10);
  const [accessRetryCount, setAccessRetryCount] = useState(5);
  const [targetCharSet, setTargetCharSet] = useState("UTF-8");

  const [fileKeyFlg, setFileKeyFlg] = useState(1);
  const [fileKeyStStr, setFileKeyStStr] = useState("");
  const [fileKeyEndStr, setFileKeyEndStr] = useState("");
  const [fileKeySlashCnt, setFileKeySlashCnt] = useState(0);

  const [nextPageCheckType, setNextPageCheckType] = useState(0);
  //checkType=0
  const [nextPageParam, setNextPageParam] = useState("");
  //checkType=7
  const [nextPageScPreStr, setNextPageScPreStr] = useState("");
  const [nextPageScPostStr, setNextPageScPostStr] = useState("");
  const [nextPageComplementStr, setNextPageComplementStr] = useState("");
  const [searchCountCheckType, setSearchCountCheckType] = useState(1);
  const [searchCountCheckClass, setSearchCountCheckClass] = useState("");
  const [searchCountPreStr, setSearchCountPreStr] = useState("");
  const [searchCountPostStr, setSearchCountPostStr] = useState("");
  const [searchCountByPage, setSearchCountByPage] = useState(20);

  const [listScrape, setListScrape] = useState(0);
  const [listAreaQuery, setListAreaQuery] = useState("");
  const [listUrlQuery, setListUrlQuery] = useState("");
  const [listTargetAtrr, setListTargetAtrr] = useState("");

  const [targetLinkParentClass, setTargetLinkParentClass] = useState("");

  const [targetPageIncStr1, setTargetPageIncStr1] = useState("");
  const [targetPageIncStr2, setTargetPageIncStr2] = useState("");
  const [targetPageIncStr3, setTargetPageIncStr3] = useState("");
  const [targetPageDecStr1, setTargetPageDecStr1] = useState("");
  const [targetPageDecStr2, setTargetPageDecStr2] = useState("");
  const [targetPageDecStr3, setTargetPageDecStr3] = useState("");

  const [crawlIniSetting, setCrawlIniSetting] = useState("");

  const [crawlIniDialogOpen, setCrawlIniDialogOpen] = useState(false);

  const classes = useStyles();

  const handleCrawlTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCrawlType(Number((event.target as HTMLInputElement).value));
  };
  const handleUseIgnoreListChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUseIgnoreList(Number((event.target as HTMLInputElement).value));
  };
  const handleIntervalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInterval(Number(event.target.value));
  };
  const handleThreadCountChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setThreadCount(Number(event.target.value));
  };
  const handleAccessRetryCountChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAccessRetryCount(Number(event.target.value));
  };
  const handleTargetCharSetChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTargetCharSet((event.target as HTMLInputElement).value);
  };
  const handleFileKeyFlgChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFileKeyFlg(Number((event.target as HTMLInputElement).value));
  };
  const handleFileKeyStStrChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFileKeyStStr(event.target.value);
  };

  const handleFileKeyEndStrChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFileKeyEndStr(event.target.value);
  };
  const handleFileKeySlashCntChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFileKeySlashCnt(Number((event.target as HTMLInputElement).value));
  };

  const handleNextPageCheckTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNextPageCheckType(Number((event.target as HTMLInputElement).value));
  };
  const handleNextPageParamChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNextPageParam(event.target.value);
  };

  const handleNextPageScPreStrChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNextPageScPreStr(event.target.value);
  };
  const handleNextPageScPostStrChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNextPageScPostStr(event.target.value);
  };
  const handleNextPageComplementStrChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNextPageComplementStr(event.target.value);
  };
  const handleSearchCountCheckTypeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchCountCheckType(Number((event.target as HTMLInputElement).value));
  };
  const handleSearchCountCheckClassChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchCountCheckClass(event.target.value);
  };
  const handleSearchCountPreStrChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchCountPreStr(event.target.value);
  };
  const handleSearchCountPostStrChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchCountPostStr(event.target.value);
  };
  const handleSearchCountByPageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchCountByPage(Number((event.target as HTMLInputElement).value));
  };

  const handleListScrapeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setListScrape(Number((event.target as HTMLInputElement).value));
  };
  const handleListAreaQueryChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setListAreaQuery(event.target.value);
  };
  const handleListUrlQueryChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setListUrlQuery(event.target.value);
  };
  const handleListTargetAtrrChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setListTargetAtrr(event.target.value);
  };
  const handleTargetLinkParentClassChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTargetLinkParentClass(event.target.value);
  };
  const handleTargetPageIncStr1Change = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTargetPageIncStr1(event.target.value);
  };
  const handleTargetPageIncStr2Change = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTargetPageIncStr2(event.target.value);
  };
  const handleTargetPageIncStr3Change = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTargetPageIncStr3(event.target.value);
  };
  const handleTargetPageDecStr1Change = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTargetPageDecStr1(event.target.value);
  };
  const handleTargetPageDecStr2Change = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTargetPageDecStr2(event.target.value);
  };
  const handleTargetPageDecStr3Change = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTargetPageDecStr3(event.target.value);
  };

  const handleOpenCrawlIniDialog = () => {
    let settings =
      "crawlType=" +
      crawlType +
      "\nuseIgnoreList=" +
      useIgnoreList +
      "\ninterval=" +
      interval +
      "\nthreadCount=" +
      threadCount +
      "\naccessRetryCount=" +
      accessRetryCount +
      "\ntargetCharSet=" +
      targetCharSet +
      "\nfileKeyFlg=" +
      fileKeyFlg;
    if (fileKeyFlg === 1) {
      settings +=
        "\nfileKeyStStr=" + fileKeyStStr + "\nfileKeyEndStr=" + fileKeyEndStr;
    } else if (fileKeyFlg === 2) {
      settings += "\nfileKeySlashCnt=" + fileKeySlashCnt;
    }

    settings += "\nnextPageCheckType=" + nextPageCheckType;
    if (nextPageCheckType === 0 || nextPageCheckType === 10) {
      settings += "\nnextPageParam=" + nextPageParam;
    } else if (nextPageCheckType === 7) {
      settings +=
        "\nnextPageScPreStr=" +
        nextPageScPreStr +
        "\nnextPageScPostStr=" +
        nextPageScPostStr +
        "\nnextPageComplementStr=" +
        nextPageComplementStr +
        "\nsearchCountCheckType=" +
        searchCountCheckType +
        "\nsearchCountCheckClass=" +
        searchCountCheckClass +
        "\nsearchCountPreStr=" +
        searchCountPreStr +
        "\nsearchCountPostStr=" +
        searchCountPostStr +
        "\nsearchCountByPage=" +
        searchCountByPage;
    }

    if (listScrape === 1) {
      settings +=
        "\nlistScrape=" +
        listScrape +
        "\nlistAreaQuery=" +
        listAreaQuery +
        "\nlistUrlQuery=" +
        listUrlQuery +
        "\nlistTargetAtrr=" +
        listTargetAtrr;
    } else {
      settings +=
        "\ntargetLinkParentClass=" +
        targetLinkParentClass;
    }
    settings += "\ntargetPageIncStr1=" +
    targetPageIncStr1 +
    "\ntargetPageIncStr2=" +
    targetPageIncStr2 +
    "\ntargetPageIncStr3=" +
    targetPageIncStr3 +
    "\ntargetPageDecStr1=" +
    targetPageDecStr1 +
    "\ntargetPageDecStr2=" +
    targetPageDecStr2 +
    "\ntargetPageDecStr3=" +
    targetPageDecStr3;

    setCrawlIniSetting(settings);
    setCrawlIniDialogOpen(true);
  };
  const handleCloseCrawlIniDialog = () => {
    setCrawlIniDialogOpen(false);
  };

  return (
    <>
      <Grid
        container
        className={classes.root}
        direction="row"
        justify="space-evenly"
      >
        <Grid item xs>
          <CrawlIniCommon
            crawlType={crawlType}
            useIgnoreList={useIgnoreList}
            interval={interval}
            threadCount={threadCount}
            accessRetryCount={accessRetryCount}
            targetCharSet={targetCharSet}
            fileKeyFlg={fileKeyFlg}
            fileKeyStStr={fileKeyStStr}
            fileKeyEndStr={fileKeyEndStr}
            fileKeySlashCnt={fileKeySlashCnt}
            handleCrawlTypeChange={handleCrawlTypeChange}
            handleUseIgnoreListChange={handleUseIgnoreListChange}
            handleIntervalChange={handleIntervalChange}
            handleThreadCountChange={handleThreadCountChange}
            handleAccessRetryCountChange={handleAccessRetryCountChange}
            handleTargetCharSetChange={handleTargetCharSetChange}
            handleFileKeyFlgChange={handleFileKeyFlgChange}
            handleFileKeyStStrChange={handleFileKeyStStrChange}
            handleFileKeyEndStrChange={handleFileKeyEndStrChange}
            handleFileKeySlashCntChange={handleFileKeySlashCntChange}
          ></CrawlIniCommon>
        </Grid>
        <Divider orientation="vertical" flexItem></Divider>
        <Grid item xs>
          <CrawlIniPagenation
            nextPageCheckType={nextPageCheckType}
            nextPageParam={nextPageParam}
            nextPageScPreStr={nextPageScPreStr}
            nextPageScPostStr={nextPageScPostStr}
            nextPageComplementStr={nextPageComplementStr}
            searchCountCheckType={searchCountCheckType}
            searchCountCheckClass={searchCountCheckClass}
            searchCountPreStr={searchCountPreStr}
            searchCountPostStr={searchCountPostStr}
            searchCountByPage={searchCountByPage}
            handleNextPageCheckTypeChange={handleNextPageCheckTypeChange}
            handleNextPageParamChange={handleNextPageParamChange}
            handleNextPageScPreStrChange={handleNextPageScPreStrChange}
            handleNextPageScPostStrChange={handleNextPageScPostStrChange}
            handleNextPageComplementStrChange={handleNextPageComplementStrChange}
            handleSearchCountCheckTypeChange={handleSearchCountCheckTypeChange}
            handleSearchCountCheckClassChange={handleSearchCountCheckClassChange}
            handleSearchCountPreStrChange={handleSearchCountPreStrChange}
            handleSearchCountPostStrChange={handleSearchCountPostStrChange}
            handleSearchCountByPageChange={handleSearchCountByPageChange}
          ></CrawlIniPagenation>
        </Grid>
        <Divider orientation="vertical" flexItem></Divider>
        <Grid item xs>
          <CrawlIniDetailPage
            listScrape={listScrape}
            listAreaQuery={listAreaQuery}
            listUrlQuery={listUrlQuery}
            listTargetAtrr={listTargetAtrr}
            targetLinkParentClass={targetLinkParentClass}
            targetPageIncStr1={targetPageIncStr1}
            targetPageIncStr2={targetPageIncStr2}
            targetPageIncStr3={targetPageIncStr3}
            targetPageDecStr1={targetPageDecStr1}
            targetPageDecStr2={targetPageDecStr2}
            targetPageDecStr3={targetPageDecStr3}
            handleListScrapeChange={handleListScrapeChange}
            handleListAreaQueryChange={handleListAreaQueryChange}
            handleListUrlQueryChange={handleListUrlQueryChange}
            handleListTargetAtrrChange={handleListTargetAtrrChange}
            handleTargetLinkParentClassChange={handleTargetLinkParentClassChange}
            handleTargetPageIncStr1Change={handleTargetPageIncStr1Change}
            handleTargetPageIncStr2Change={handleTargetPageIncStr2Change}
            handleTargetPageIncStr3Change={handleTargetPageIncStr3Change}
            handleTargetPageDecStr1Change={handleTargetPageDecStr1Change}
            handleTargetPageDecStr2Change={handleTargetPageDecStr2Change}
            handleTargetPageDecStr3Change={handleTargetPageDecStr3Change}
          ></CrawlIniDetailPage>
        </Grid>
      </Grid>
      <AppBar position="fixed" color="inherit" className={classes.bottomBar}>
        <Toolbar>
          <Button
            color="secondary"
            variant="outlined"
            className={classes.generateButton}
            onClick={handleOpenCrawlIniDialog}
          >
            GENERATE
          </Button>
        </Toolbar>
      </AppBar>
      <CrawlIniPreviewDialog
        open={crawlIniDialogOpen}
        onClose={handleCloseCrawlIniDialog}
        setting={crawlIniSetting}
      ></CrawlIniPreviewDialog>
    </>
  );
};

export default CrawlIniPage;
