import React from "react";

import KInput from "../Input";

export default () => (

  <KInput defaultValue=""
    placeholder="placeholder"
    style={{ margin: '14px', width: '350px' }}
    maxLength={4}
    showCount
    disabled
  />
)