import Progress from "./Progress"
import React from 'react';

const ProgressContainer = () => {
  
    const photoUri = 'file:///data/user/0/host.exp.exponent/files/example.jpg';

  return <Progress photoUri={photoUri} />;
};

export default ProgressContainer;