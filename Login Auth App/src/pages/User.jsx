import React from 'react';
import { PagerouteHoc } from './../hoc/PagerouteHoc';

const User = () => {
  return (
    <div>
      {' '}
      <h3> ....User Page.... You Can Keep it Private </h3>
    </div>
  );
};

export default PagerouteHoc(User);
