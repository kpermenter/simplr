import React from 'react';
import { Error, Input } from '../styles/components';

const TextField = props => (
  <div>
    <Input
      error={props.error}
      field={props.field}
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      onChange={e => props.onChange(e, props.field)}
    />

    <Error>
      {props.error[props.field] ? props.error[props.field] : <div>&nbsp;</div>}
    </Error>
  </div>
);

export default TextField;