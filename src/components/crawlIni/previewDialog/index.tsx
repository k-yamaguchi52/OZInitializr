import React, { FC, useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@material-ui/core";

type Props = {
  open: boolean;
  onClose: () => void;
  setting: string;
};

const CrawlIniPreviewDialog: FC<Props> = ({ open, onClose, setting }) => {

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
    >
      <DialogContent>
        <TextField
          id="standard-multiline-static"
          multiline
          rows={25}
          variant="filled"
          fullWidth
          defaultValue={setting}
        />
      </DialogContent>
      <DialogActions>
          <Button onClick={onClose} color="primary">
              CLOSE
          </Button>
        </DialogActions>
    </Dialog>
  );
};

export default CrawlIniPreviewDialog;
