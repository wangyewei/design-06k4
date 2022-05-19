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

    <div>带Icon的</div>

    <KSteps current={3} >
      <Step title="Login" icon="user" />
      <Step title="Verification" icon="barcode" />
      <Step title="Pay" icon="circle-notch" />
      <Step title="Done" icon="book-bookmark" />
    </KSteps>
  </>
)