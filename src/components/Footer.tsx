import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    background: theme.palette.primary.dark,
    color: theme.palette.common.white,
    padding: theme.spacing(2),
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Typography variant="h6">Join our community</Typography>
    </div>
  );
};

export default Footer;
