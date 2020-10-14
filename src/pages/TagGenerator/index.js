import React, { useState } from 'react';
import useStyles from './styles.js';

const TagGenerator = () => {
  const classes = useStyles();

  return <div className={classes.testDiv}>
    <h1>Welcome to the tag generator</h1>
  </div>
};

export default TagGenerator;