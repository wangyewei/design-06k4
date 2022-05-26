import React from "react";
import KInput from '../Input'

export default () => (
  <>
    <KInput style={{ margin: '14px', width: '350px' }} />
    <KInput status="error" style={{ margin: '14px', width: '350px' }} />
    <KInput status="warning" style={{ margin: '14px', width: '350px' }} />

    <KInput style={{ margin: '14px', width: '350px' }} prefixIcon="clock" />
    <KInput status="error" style={{ margin: '14px', width: '350px' }} prefixIcon="clock" />
    <KInput status="warning" style={{ margin: '14px', width: '350px' }} prefixIcon="clock" />
  </>
)