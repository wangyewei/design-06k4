import React from 'react'
import KSteps from '../index'
import KButton from '@/packages/button'
import './style.scss'
const { Step } = KSteps
const steps = [
  {
    title: 'First',
    content: 'First-content',
  },
  {
    title: 'Second',
    content: 'Second-content',
  },
  {
    title: 'Last',
    content: 'Last-content',
  },
];


const ControSteps = () => {
  const [current, setCurrent] = React.useState(1);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <KSteps current={current}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </KSteps>
      <div className="steps-content">{steps[current - 1].content}</div>
      <div className="steps-action">
        {current < steps.length && (
          <KButton type="primary" onClick={() => next()}>
            Next
          </KButton>
        )}
        {current === steps.length && (
          <KButton type="primary">
            Done
          </KButton>
        )}
        {current > 1 && (
          <KButton style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </KButton>
        )}
      </div>
    </>
  );
};

export default ControSteps;