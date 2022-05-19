import React from "react";
import KSteps from "../Steps";

const { Step } = KSteps
export default () => (
  <>
    <div>默认</div>
    <KSteps current={2}>
      <Step title="Finished" description="This is a description." />
      <Step title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
      <Step title="Waiting" description="This is a description." />
    </KSteps>

    <div>迷你尺寸</div>
    <KSteps current={2} size="small">
      <Step title="Finished" />
      <Step title="In Progress" />
      <Step title="Waiting" />
    </KSteps>
  </>
)