import * as React from "react";
import { DialogRatePageProps } from "./DialogRateProps";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { MailController } from "../../controller/MailController";
import Swal from "sweetalert2";
import AnchorToTab from "../util-components/AnchorToTab";

const DialogRatePage: React.FC<DialogRatePageProps> = (
  props: DialogRatePageProps
) => {
  const { like, open, sectionToComment, pageToComment, onClose } = props;
  const [currComment, setCurrComment] = React.useState<string>("");
  const makeBodyDialog = () => {
    let result = undefined;
    if (sectionToComment) {
      result = `How can we improve the ${sectionToComment} section? (optional)`;
    } else {
      result = `${
        like ? "What did you like about" : "How can we improve"
      } the ${pageToComment} page? (optional)`;
    }
    return result;
  };
  const handleSubmit = async () => {
    const { success, message, payload } = await MailController.sendFeddback({
      ...props,
      comment: currComment,
    });
    if (success) {
      Swal.fire({
        icon: "success",
        title: "Feedback received",
        text: "Thanks for your feedback!!",
        // footer: '<a href="">Why do I have this issue?</a>'
      });
      handleClose();
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Please try again later :C",
        // footer: '<a href="">Why do I have this issue?</a>'
      });
    }
  };
  const handleClose = () => {
    setCurrComment("");
    onClose?.();
  };

  if (open)
    return (
      <Dialog open={open} onClose={() => handleClose()}>
        <DialogTitle>In a mood to give us feedback?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {<>{makeBodyDialog()}</>}
            <br />
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            //label="Email Address"
            //type="email"
            fullWidth
            variant="outlined"
            onChange={(e) => setCurrComment(e.target.value)}
            multiline
            rows={4}
          />

          {typeof like === "boolean" && !like && (
            <>
              Is something broken? Do you need a reply to a problem you've
              encountered? Please{" "}
              <AnchorToTab href="https://github.com/files-ui/files-ui-react/issues/new/choose">
                open an issue.
              </AnchorToTab>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button variant="text" onClick={() => handleClose()}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    );
  else return <></>;
};
export default DialogRatePage;
