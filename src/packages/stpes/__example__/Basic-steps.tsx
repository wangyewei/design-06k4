import React from "react";
import KSteps from "../Steps";

const { Step } = KSteps
export default () => (
  <KSteps current={2}>
    <Step title="Finished" description="This is a description." />
    <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
    <Step title="Waiting" description="This is a description." />
  </KSteps>
)