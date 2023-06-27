import React from 'react'
import KSteps from '../Steps'

const { Step } = KSteps

export default () => (
  <>
    <div>direction = horizontal</div>
    <KSteps direction="horizontal" current={1}>
      <Step title="Finished" description="This is a description." />
      <Step title="In Progress" description="This is a description." />
      <Step title="Waiting" description="This is a description." />
    </KSteps>

    <div>direction = vertical</div>
    <KSteps direction="vertical" current={1}>
      <Step title="Finished" description="This is a description." />
      <Step title="In Progress" description="This is a description." />
      <Step title="Waiting" description="This is a description." />
    </KSteps>

    <div>direction = vertical size = small</div>
    <KSteps direction="vertical" current={1} size="small">
      <Step title="Finished" description="This is a description." />
      <Step title="In Progress" description="This is a description." />
      <Step title="Waiting" description="This is a description." />
    </KSteps>
    <br />
    <div>danger</div>
    <br />
    <KSteps current={2} danger>
      <Step title="Finished" description="This is a description." />
      <Step title="In Progress" description="This is a description." />
      <Step title="Waiting" description="This is a description." />
    </KSteps>
  </>

);