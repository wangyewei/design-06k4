import React from "react";
import KPagination from "../Pagination";

export default () => (
  <div>
    <KPagination defaultCurrent={6} total={500} onPageChange={(page, pageSize) => console.log(page, pageSize)} />
  </div>
)

