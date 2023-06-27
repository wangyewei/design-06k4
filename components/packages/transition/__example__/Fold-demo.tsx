import React, { useState } from "react";
import KButton from "@/packages/button";
import Fold from "../Fold";

export default () => {

  const [show, setShow] = useState(false)

  return (<div>
    <KButton type="primary" onClick={() => setShow(!show)}>Click Me !</KButton>
    <Fold show={show}>
      <div style={{ width: "400px", background: "#f2f2f2" }}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <div key={item}>This IS A Item</div>
        ))}
      </div>
    </Fold>
  </div>)
}
