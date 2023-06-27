import React from "react";
import KPageHeader from "../PageHeader";

const BasicPageHeader = () => {
  const style = {
    border: '1px solid rgba(235, 237 ,240)'
  }

  return (
    <KPageHeader
      title="Title"
      subTitle="This is a sub title"
      onBack={() => console.log('back')}
      style={{ ...style }}>
    </KPageHeader>
  )
}

export default BasicPageHeader