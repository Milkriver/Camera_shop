export type TSortType =
    {
      type: string;
      name: string;
      label: string;
    }

export type TFilterItem = {
      type: string;
      name: string;
      title: string;
    }
export type TFilterType = {
  digital: boolean;
  film: boolean;
  snapshot: boolean;
  collection: boolean;
}
export type TFilterLevel = {
  zero: boolean;
  nonprofessional: boolean;
  professional: boolean;
}
export type TParams = {
  minPrice?: string;
  maxPrice?: string;
  sortType?:string;
  orderType?: string;
  category?: string;
  typeList?: TFilterType;
  levelList?: TFilterLevel;
}
