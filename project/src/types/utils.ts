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
