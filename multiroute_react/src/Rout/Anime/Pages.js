import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  pi:{
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function Pages() {
  const classes = useStyles();

  return (
    <div className={classes.pi}>
      <Pagination count={10} variant="outlined" />
      <Pagination count={10} variant="outlined" color="primary" />
      <Pagination count={10} variant="outlined" color="secondary" />
      <Pagination count={10} variant="outlined" disabled />
    </div>
  );
}
