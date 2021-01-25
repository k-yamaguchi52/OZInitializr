import { AppBar, Button, createStyles, makeStyles, Theme, Toolbar, Typography } from "@material-ui/core";
import React, {FC, useState} from "react";
import CrawlIniPreviewDialog from "../crawlIni/previewDialog";

const useStyles = makeStyles((theme: Theme) => 
createStyles({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1
    }
}),
);

const NavigationBar: FC = () => {

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

    const handleOpenCrawlIniDialog = () => {
        const settings = "crawlType=" + crawlType
        + "\nuseIgnoreList=" + useIgnoreList;
        setCrawlIniSetting(settings);
        setCrawlIniDialogOpen(true);
    };
    const handleCloseCrawlIniDialog = () => {
        setCrawlIniDialogOpen(false);
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        OZ Initializr
                    </Typography>
                    {/* <Button color="inherit">CRAWL</Button>
                    <Button color="inherit">SCRAPE</Button> */}
                    {/* <Button color="inherit" onClick={handleOpenCrawlIniDialog}>GENERATE</Button> */}
                </Toolbar>
            </AppBar>
            <CrawlIniPreviewDialog open={crawlIniDialogOpen} onClose={handleCloseCrawlIniDialog} setting={crawlIniSetting}>
            </CrawlIniPreviewDialog>
        </div>
    );
}

export default NavigationBar;