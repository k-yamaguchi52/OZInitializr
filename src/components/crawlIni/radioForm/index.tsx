import { FormControlLabel, FormLabel, Grid, Radio, RadioGroup } from "@material-ui/core";
import React, {FC} from "react";

const RadioForm: FC = () => {
    return (
        <Grid item>
        <Grid container direction="column" alignItems="flex-start">
          <FormLabel component="legend">nextPageParam</FormLabel>
          <RadioGroup
            name="nextPageParam"
            aria-label="nextPageParam"
            // value={nextPageParam}
            // onChange={handleNextPageParamChange}
            row
          >
            {/* {[0, 7, 10].map((value) => (
              <FormControlLabel
                key={value}
                value={value.toString()}
                // control={<Radio checked={nextPageCheckType === value} />}
                label={value.toString()}
              />
            ))} */}
          </RadioGroup>
        </Grid>
      </Grid>
    )
}