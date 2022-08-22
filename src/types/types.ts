export interface IToken {
  name?: string | undefined;
  symbol: string;
  iconUrl?: string;
  decimals: number;
  address: string;
  occurrences?: number[] | number;
  aggregators?: string[];
}

export interface IDropdownProps {
  toggle: () => void;
  btnRef: React.MutableRefObject<null>;
}

export interface IAccount {
  account: { name: string; address: string };
}
