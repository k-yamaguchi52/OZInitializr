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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

type Props = {
  listScrape: number;
  listAreaQuery: string;
  listUrlQuery: string;
  listTargetAtrr: string;
  targetLinkParentClass: string;
  targetPageIncStr1: string;
  targetPageIncStr2: string;
  targetPageIncStr3: string;
  targetPageDecStr1: string;
  targetPageDecStr2: string;
  targetPageDecStr3: string;
  handleListScrapeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleListAreaQueryChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleListUrlQueryChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleListTargetAtrrChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleTargetLinkParentClassChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleTargetPageIncStr1Change: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleTargetPageIncStr2Change: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleTargetPageIncStr3Change: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleTargetPageDecStr1Change: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleTargetPageDecStr2Change: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleTargetPageDecStr3Change: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
};

const CrawlIniDetailPage: FC<Props> = ({
  listScrape,
  listAreaQuery,
  listUrlQuery,
  listTargetAtrr,
  targetLinkParentClass,
  targetPageIncStr1,
  targetPageIncStr2,
  targetPageIncStr3,
  targetPageDecStr1,
  targetPageDecStr2,
  targetPageDecStr3,
  handleListScrapeChange,
  handleListAreaQueryChange,
  handleListUrlQueryChange,
  handleListTargetAtrrChange,
  handleTargetLinkParentClassChange,
  handleTargetPageIncStr1Change,
  handleTargetPageIncStr2Change,
  handleTargetPageIncStr3Change,
  handleTargetPageDecStr1Change,
  handleTargetPageDecStr2Change,
  handleTargetPageDecStr3Change,
}) => {
  const classes = useStyles();

  return (
    <Grid container direction="column" className={classes.root} spacing={3}>
      <Grid item>
        <Grid container direction="column" alignItems="flex-start">
          <FormLabel component="legend">listScrape</FormLabel>
          <RadioGroup
            name="listScrape"
            aria-label="listScrape"
            value={listScrape}
            onChange={handleListScrapeChange}
            row
          >
            {[0, 1].map((value) => (
              <FormControlLabel
                key={value}
                value={value.toString()}
                control={<Radio checked={listScrape === value} />}
                label={value.toString()}
              />
            ))}
          </RadioGroup>
        </Grid>
      </Grid>

      {listScrape === 1 ? (
        <>
          <Grid item>
            <Grid container direction="column" alignItems="flex-start">
              <FormLabel component="legend">listAreaQuery</FormLabel>
              <TextField
                value={listAreaQuery}
                onChange={handleListAreaQueryChange}
              />
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column" alignItems="flex-start">
              <FormLabel component="legend">listUrlQuery</FormLabel>
              <TextField
                value={listUrlQuery}
                onChange={handleListUrlQueryChange}
              />
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column" alignItems="flex-start">
              <FormLabel component="legend">listTargetAtrr</FormLabel>
              <TextField
                value={listTargetAtrr}
                onChange={handleListTargetAtrrChange}
              />
            </Grid>
          </Grid>
        </>
      ) : (
        <Grid item>
          <Grid container direction="column" alignItems="flex-start">
            <FormLabel component="legend">targetLinkParentClass</FormLabel>
            <TextField
              value={targetLinkParentClass}
              onChange={handleTargetLinkParentClassChange}
            />
          </Grid>
        </Grid>
      )}

      <Grid item>
        <Grid container direction="column" alignItems="flex-start">
          <FormLabel component="legend">targetPageIncStr1</FormLabel>
          <TextField
            value={targetPageIncStr1}
            onChange={handleTargetPageIncStr1Change}
          />
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="column" alignItems="flex-start">
          <FormLabel component="legend">targetPageIncStr2</FormLabel>
          <TextField
            value={targetPageIncStr2}
            onChange={handleTargetPageIncStr2Change}
          />
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="column" alignItems="flex-start">
          <FormLabel component="legend">targetPageIncStr3</FormLabel>
          <TextField
            value={targetPageIncStr3}
            onChange={handleTargetPageIncStr3Change}
          />
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="column" alignItems="flex-start">
          <FormLabel component="legend">targetPageDecStr1</FormLabel>
          <TextField
            value={targetPageDecStr1}
            onChange={handleTargetPageDecStr1Change}
          />
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="column" alignItems="flex-start">
          <FormLabel component="legend">targetPageDecStr2</FormLabel>
          <TextField
            value={targetPageDecStr2}
            onChange={handleTargetPageDecStr2Change}
          />
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="column" alignItems="flex-start">
          <FormLabel component="legend">targetPageDecStr3</FormLabel>
          <TextField
            value={targetPageDecStr3}
            onChange={handleTargetPageDecStr3Change}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CrawlIniDetailPage;
