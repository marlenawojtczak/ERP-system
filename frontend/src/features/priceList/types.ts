export interface PriceItem {
  id: string;
  type: string;
  color: string;
  prices: number[];
}

export interface PriceState {
  data: PriceItem[];
  status: "idle" | "loading" | "succeeded" | "failed";
}

export interface UserState {
  isAdmin: boolean;
}
