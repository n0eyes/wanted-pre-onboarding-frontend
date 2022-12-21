import React, { memo } from 'react';
import { Styled } from './style';

function Input({ ...props }) {
  return <Styled.Input {...props} />;
}

export default memo(Input);
