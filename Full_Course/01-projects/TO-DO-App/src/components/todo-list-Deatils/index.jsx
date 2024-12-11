import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { Fragment } from "react";

function Tododeatils({ todoDeatils, openDilog, setopenDilog, settodoDetails }) {
  return (
    <Fragment>
      <Dialog onClose={() => setopenDilog(false)} open={openDilog}>
        <DialogTitle>
          <p>
            ID- {todoDeatils?.id} = {todoDeatils?.todo}
          </p>
        </DialogTitle>
        <DialogActions>
          <Button
            onClick={() => {
              settodoDetails(null);
              setopenDilog(false);
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
}
export default Tododeatils;
