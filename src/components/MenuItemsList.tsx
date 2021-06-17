import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { useLocation } from "react-router-dom";

import { DRAWER_LIST } from "../constants/menu";
import MenuItem from "./MenuItem";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  padding: {
    padding: 0,
    width:200
  },

}));

const MenuItemsList = () => {
  const classes = useStyles();

  const { pathname } = useLocation();

  return (
    <Grid>
      <List className={classes.padding}>
        {DRAWER_LIST.map(({ literal, route, Icon }) => (

          <img  src={Icon}></img>
        ))}
      </List>
    </Grid>
  );
};

export default MenuItemsList;
