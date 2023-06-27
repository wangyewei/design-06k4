import React from "react";
import KInput from "../Input";

const { Search } = KInput

export default () => (
  <>
    <Search
      placeholder="Search"
      style={{ width: '350px', margin: '12px' }}
      onChange={e => console.log(e)}
    // loading
    />
    <Search placeholder="06k4"
      style={{ width: '350px', margin: '12px' }}
      addonBefore="https://"
    // loading
    />
    <Search placeholder="06k4"
      style={{ width: '350px', margin: '12px' }}
      enterButton="Search"
    // loading
    />
  </>
)