// Copyright (c) 2017 PlanGrid, Inc.

import React from 'react';

import 'styles/loading.scss';

const Loading = props => (
  <div className="loading-container">
    {props.loaderComponent
      ? <props.loaderComponent {...props} />
      : <span className="loading" />
    }
  </div>
);

export default Loading;
