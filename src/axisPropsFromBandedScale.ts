// @flow
import { ScaleBand } from 'd3-scale';
import type { PropsForAxis } from './types';

export default function axisPropsFromBandedScale<T>(
  scale: ScaleBand<T>,
): PropsForAxis<T> {
  const range = scale.range();
  const values = scale.domain();
  const format = (d: T) => String(d);

  let offset = scale.bandwidth() / 2;
  const scaleCopy = scale.copy();
  if (scaleCopy.round()) offset = Math.round(offset);
  const position = (d: T) => (scaleCopy(d) || 0) + offset;

  return { range, values, format, position };
}
