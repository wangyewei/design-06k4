import React, { useState } from "react";
import Affix from "../Affix";
import KButton from "@/packages/button";
const BasicAffix = () => {


  return (

    <>
      <div style={{ height: '600px' }}></div>

      <Affix offsetTop={120}><KButton type="primary">Affix Top</KButton></Affix>

      <div style={{ height: '600px' }}></div>
      <div style={{ height: '600px' }}></div>
      <div style={{ height: '600px' }}></div>
      <div style={{ height: '600px' }}></div>
      <div style={{ height: '600px' }}></div>
      <div style={{ height: '600px' }}></div>

    </>
  )
}

export default BasicAffix