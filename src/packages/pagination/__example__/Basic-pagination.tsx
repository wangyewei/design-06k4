import React from "react";
import KPagination from "../Pagination";

export default () => (
  <div>
    <KPagination defaultCurrent={1} total={50} onPageChange={(page, pageSize) => console.log(page, pageSize)} />
  </div>
)

