import { ScaleLinear } from 'd3-scale';

export default function axisPropsFromTickScale<T, U>(
  scale: ScaleLinear<T, U>,
  tickCount: number,
) {
  const range = scale.range();
  const values = scale.ticks(tickCount);
  const format = scale.tickFormat(tickCount);
  const position = scale.copy();

  return {
    range,
    values,
    format,
    position,
  };
}
