import {
  createStyles,
  FormControlLabel,
  FormLabel,
  Grid,
  makeStyles,
  Radio,
  RadioGroup,
  TextField,
  Theme,
} from "@material-ui/core";
import React, { FC } from "react";

type Props = {
  crawlType: number;
  useIgnoreList: number;
  interval: number;
  threadCount: number;
  accessRetryCount: number;
  targetCharSet: string;
  fileKeyFlg: number;
  fileKeyStStr: string;
  fileKeyEndStr: string;
  fileKeySlashCnt: number;
  handleCrawlTypeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleUseIgnoreListChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleIntervalChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleThreadCountChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleAccessRetryCountChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleTargetCharSetChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleFileKeyFlgChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleFileKeyStStrChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleFileKeyEndStrChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleFileKeySlashCntChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

const CrawlIniCommon: FC<Props> = ({
  crawlType,
  useIgnoreList,
  interval,
  threadCount,
  accessRetryCount,
  targetCharSet,
  fileKeyFlg,
  fileKeyStStr,
  fileKeyEndStr,
  fileKeySlashCnt,
  handleCrawlTypeChange,
  handleUseIgnoreListChange,
  handleIntervalChange,
  handleThreadCountChange,
  handleAccessRetryCountChange,
  handleTargetCharSetChange,
  handleFileKeyFlgChange,
  handleFileKeyStStrChange,
  handleFileKeyEndStrChange,
  handleFileKeySlashCntChange,
}) => {

  const classes = useStyles();

  return (
    <Grid container direction="column" className={classes.root} spacing={3}>
      <Grid item>
        <Grid container direction="column" alignItems="flex-start">
          <FormLabel component="legend">crawlType</FormLabel>
          <RadioGroup
            name="crawlType"
            aria-label="crawlType"
            value={crawlType}
            onChange={handleCrawlTypeChange}
            row
          >
            {[2, 3, 4, 5].map((value) => (
              <FormControlLabel
                key={value}
                value={value.toString()}
                control={<Radio checked={crawlType === value} />}
                label={value.toString()}
              />
            ))}
          </RadioGroup>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="column" alignItems="flex-start">
          <FormLabel component="legend">useIgnoreList</FormLabel>
          <RadioGroup
            name="useIgnoreList"
            aria-label="useIgnoreList"
            value={useIgnoreList}
            onChange={handleUseIgnoreListChange}
            row
          >
            {[0, 1].map((value) => (
              <FormControlLabel
                key={value}
                value={value.toString()}
                control={<Radio checked={useIgnoreList === value} />}
                label={value.toString()}
              />
            ))}
          </RadioGroup>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="column" alignItems="flex-start">
          <FormLabel component="legend">interval</FormLabel>
          <TextField
            type="number"
            value={interval}
            onChange={handleIntervalChange}
          />
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="column" alignItems="flex-start">
          <FormLabel component="legend">threadCount</FormLabel>
          <TextField
            type="number"
            value={threadCount}
            onChange={handleThreadCountChange}
          />
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="column" alignItems="flex-start">
          <FormLabel component="legend">accessRetryCount</FormLabel>
          <TextField
            type="number"
            value={accessRetryCount}
            onChange={handleAccessRetryCountChange}
          />
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="column" alignItems="flex-start">
          <FormLabel component="legend">targetCharSet</FormLabel>
          <RadioGroup
            name="targetCharSet"
            aria-label="targetCharSet"
            value={targetCharSet}
            onChange={handleTargetCharSetChange}
            row
          >
            {["UTF-8", "Shift-JIS"].map((value) => (
              <FormControlLabel
                key={value}
                value={value}
                control={<Radio checked={targetCharSet === value} />}
                label={value}
              />
            ))}
          </RadioGroup>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="column" alignItems="flex-start">
          <FormLabel component="legend">fileKeyFlg</FormLabel>
          <RadioGroup
            name="fileKeyFlg"
            aria-label="fileKeyFlg"
            value={fileKeyFlg}
            onChange={handleFileKeyFlgChange}
            row
          >
            {[1, 2].map((value) => (
              <FormControlLabel
                key={value}
                value={value.toString()}
                control={<Radio checked={fileKeyFlg === value} />}
                label={value.toString()}
              />
            ))}
          </RadioGroup>
        </Grid>
      </Grid>

      {fileKeyFlg === 1 && (
        <>
          <Grid item>
            <Grid container direction="column" alignItems="flex-start">
              <FormLabel component="legend">fileKeyStStr</FormLabel>
              <TextField
                value={fileKeyStStr}
                onChange={handleFileKeyStStrChange}
              />
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column" alignItems="flex-start">
              <FormLabel component="legend">fileKeyEndStr</FormLabel>
              <TextField
                value={fileKeyEndStr}
                onChange={handleFileKeyEndStrChange}
              />
            </Grid>
          </Grid>
        </>
      )}

      {fileKeyFlg === 2 && (
        <Grid item>
          <Grid container direction="column" alignItems="flex-start">
            <FormLabel component="legend">fileKeySlashCnt</FormLabel>
            <TextField
              type="number"
              value={fileKeySlashCnt}
              onChange={handleFileKeySlashCntChange}
            />
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default CrawlIniCommon;
