import { createStyles, FormControlLabel, FormLabel, Grid, makeStyles, Radio, RadioGroup, TextField, Theme } from "@material-ui/core";
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
nextPageCheckType: number;
nextPageParam: string;
nextPageScPreStr: string;
nextPageScPostStr: string;
nextPageComplementStr: string;
searchCountCheckType: number;
searchCountCheckClass: string;
searchCountPreStr: string;
searchCountPostStr: string;
searchCountByPage: number;
handleNextPageCheckTypeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
handleNextPageParamChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
handleNextPageScPreStrChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
handleNextPageScPostStrChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
handleNextPageComplementStrChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
handleSearchCountCheckTypeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
handleSearchCountCheckClassChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
handleSearchCountPreStrChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
handleSearchCountPostStrChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
handleSearchCountByPageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CrawlIniPagination: FC<Props> = ({
    nextPageCheckType,
    nextPageParam,
    nextPageScPreStr,
    nextPageScPostStr,
    nextPageComplementStr,
    searchCountCheckType,
    searchCountCheckClass,
    searchCountPreStr,
    searchCountPostStr,
    searchCountByPage,
    handleNextPageCheckTypeChange,
    handleNextPageParamChange,
    handleNextPageScPreStrChange,
    handleNextPageScPostStrChange,
    handleNextPageComplementStrChange,
    handleSearchCountCheckTypeChange,
    handleSearchCountCheckClassChange,
    handleSearchCountPreStrChange,
    handleSearchCountPostStrChange,
    handleSearchCountByPageChange,
}) => {
    
    const classes = useStyles();

  return (
    <Grid container direction="column" className={classes.root} spacing={3}>
      <Grid item>
        <Grid container direction="column" alignItems="flex-start">
          <FormLabel component="legend">nextPageCheckType</FormLabel>
          <RadioGroup
            name="nextPageCheckType"
            aria-label="nextPageCheckType"
            value={nextPageCheckType}
            onChange={handleNextPageCheckTypeChange}
            row
          >
            {[0, 7, 10].map((value) => (
              <FormControlLabel
                key={value}
                value={value.toString()}
                control={<Radio checked={nextPageCheckType === value} />}
                label={value.toString()}
              />
            ))}
          </RadioGroup>
        </Grid>
      </Grid>

      {(nextPageCheckType === 0 || nextPageCheckType === 10) && 
      <Grid item>
        <Grid container direction="column" alignItems="flex-start">
          <FormLabel component="legend">nextPageParam</FormLabel>
          <TextField
            value={nextPageParam}
            onChange={handleNextPageParamChange}
          />
        </Grid>
      </Grid>
      }

      {nextPageCheckType === 7 && 
      <>
      <Grid item>
        <Grid container direction="column" alignItems="flex-start">
          <FormLabel component="legend">nextPageScPreStr</FormLabel>
          <TextField
            value={nextPageScPreStr}
            onChange={handleNextPageScPreStrChange}
          />
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="column" alignItems="flex-start">
          <FormLabel component="legend">nextPageScPostStr</FormLabel>
          <TextField
            value={nextPageScPostStr}
            onChange={handleNextPageScPostStrChange}
          />
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="column" alignItems="flex-start">
          <FormLabel component="legend">nextPageComplementStr</FormLabel>
          <TextField
            value={nextPageComplementStr}
            onChange={handleNextPageComplementStrChange}
          />
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="column" alignItems="flex-start">
          <FormLabel component="legend">searchCountCheckType</FormLabel>
          <RadioGroup
            name="searchCountCheckType"
            aria-label="searchCountCheckType"
            value={searchCountCheckType}
            onChange={handleSearchCountCheckTypeChange}
            row
          >
            {[0, 1].map((value) => (
              <FormControlLabel
                key={value}
                value={value.toString()}
                control={<Radio checked={searchCountCheckType === value} />}
                label={value.toString()}
              />
            ))}
          </RadioGroup>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="column" alignItems="flex-start">
          <FormLabel component="legend">searchCountCheckClass</FormLabel>
          <TextField
            value={searchCountCheckClass}
            onChange={handleSearchCountCheckClassChange}
          />
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="column" alignItems="flex-start">
          <FormLabel component="legend">searchCountPreStr</FormLabel>
          <TextField
            value={searchCountPreStr}
            onChange={handleSearchCountPreStrChange}
          />
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="column" alignItems="flex-start">
          <FormLabel component="legend">searchCountPostStr</FormLabel>
          <TextField
            value={searchCountPostStr}
            onChange={handleSearchCountPostStrChange}
          />
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="column" alignItems="flex-start">
          <FormLabel component="legend">searchCountByPage</FormLabel>
          <TextField
          type="number"
            value={searchCountByPage}
            onChange={handleSearchCountByPageChange}
          />
        </Grid>
      </Grid>
      </>
      }
      
    </Grid>
  );
};

export default CrawlIniPagination;
