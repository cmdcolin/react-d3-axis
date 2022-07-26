// @flow
import type { PropsForAxis } from './types';
import { ScaleLinear } from 'd3-scale';

export default function axisPropsFromTickScale<number, number, V>(
  scale: ScaleLinear<number, number, V>,
  tickCount: number,
): PropsForAxis<number> {
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
