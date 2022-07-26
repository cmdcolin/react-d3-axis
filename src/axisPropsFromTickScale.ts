import { ScaleLinear } from 'd3-scale';

export default function axisPropsFromTickScale<T, U, V>(
  scale: ScaleLinear<T, U, V>,
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
