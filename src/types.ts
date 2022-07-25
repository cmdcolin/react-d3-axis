export type Scaler<T> = (x: T) => number;
export type BandedScale<T> = {
  (x: T): number;
  domain(): Array<T>;
  range(): Array<number>;
  copy(): BandedScale<T>;
  bandwidth(): number;
};
export type TickScale<T> = {
  (x: T): number;
  domain(): Array<T>;
  range(): Array<number>;
  ticks(count: number): Array<T>;
  tickFormat(count: number, fmt?: string | null): (val: T) => string;
  copy(): TickScale<T>;
};
export type Orients = 'TOP' | 'RIGHT' | 'BOTTOM' | 'LEFT';
export type AxisStyle = {
  orient: Orients;
  tickSizeInner: number;
  tickSizeOuter: number;
  tickPadding: number;
  strokeWidth: number;
  strokeColor: string;
  tickFont: string;
  tickFontSize: number;
};
export type PropsForAxis<T> = {
  range: Array<number>;
  values: Array<T>;
  position: Scaler<T>;
  format(d: T): string;
};
