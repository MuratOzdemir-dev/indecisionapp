import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "#3c4251",
    border: "2px solid #000",
    borderRadius: 5,
    boxShadow: theme.shadows[5],
    padding: 32,
    paddingBottom: 16,
    textAlign: "center",
    
  },
}));

export default function OptionModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
    props.handlePick(open);
  };

  const handleClose = () => {
    setOpen(false);
    props.handlePick(open);
  };

  return (
    <div className="action">
      <button
        type="button"
        onClick={handleOpen}
        disabled={!props.hasOptions}
        className="action__big-button"
      >
        What should I do?
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Selected Option</h2>
            <p id="transition-modal-description">{props.selected}</p>
            <button onClick={handleClose} className="button--modal">Ok</button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
