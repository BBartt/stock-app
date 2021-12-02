import { IStock } from "../interfaces";

const removeDuplicatesBy = (array: any, key: string): any => [
  ...new Map(array.map((v: any) => [v[key], v])).values(),
];

const any = (object: IStock): boolean =>
  Object.values(object).length > 0 ? true : false;

const toLocalizeNumber = (num: number) =>
  new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 3,
    notation: "compact",
    compactDisplay: "long",
  }).format(num);

export { removeDuplicatesBy, any, toLocalizeNumber };
