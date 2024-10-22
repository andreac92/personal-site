import { SearchParams } from "../types";

export const updateChiSearchParams = (
  oldSearchParams: SearchParams,
  newSearchParams: SearchParams
) => {
  const params = Object.assign({}, oldSearchParams);
  Object.keys(newSearchParams).forEach((newParam) => {
    const value = newSearchParams[newParam];
    if (!value) {
      delete params[newParam];
    } else {
      params[newParam] = value;
    }
  });
  return params;
};

export const toURLParams = (obj: SearchParams) => {
  return new URLSearchParams(obj as Record<string, string>).toString();
};
