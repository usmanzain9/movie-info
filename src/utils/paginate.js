import _ from "lodash";

export function Paginate(items, pageNumber, size) {
  const startIndex = (pageNumber - 1) * size;
  return _(items)
    .slice(startIndex)
    .take(size)
    .value();
}
