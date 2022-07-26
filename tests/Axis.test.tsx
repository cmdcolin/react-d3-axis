import React from 'react';
import { render } from '@testing-library/react';
import Axis, {
  TOP, RIGHT, BOTTOM, LEFT,
} from '../src/Axis';

test('Renders bottom-oriented', () => {
  const { container } = render(
    <svg>
      <Axis
        style={{ orient: BOTTOM }}
        range={[0, 1000]}
        values={[0, 250, 500]}
        position={d => d * 2}
        format={d => `${d}`}
      />
    </svg>,
  );
  expect(container).toMatchSnapshot();
});

test('Renders top-oriented', () => {
  const { container } = render(
    <svg>
      <Axis
        style={{ orient: TOP }}
        range={[0, 1000]}
        values={[0, 250, 500]}
        position={d => d * 2}
        format={d => `${d}`}
      />
    </svg>,
  );
  expect(container).toMatchSnapshot();
});

test('Renders left-oriented', () => {
  const { container } = render(
    <svg>
      <Axis
        style={{ orient: LEFT }}
        range={[0, 1000]}
        values={[0, 250, 500]}
        position={d => d * 2}
        format={d => `${d}`}
      />
    </svg>,
  );
  expect(container).toMatchSnapshot();
});

test('Renders right-oriented', () => {
  const { container } = render(
    <svg>
      <Axis
        style={{ orient: RIGHT }}
        range={[0, 1000]}
        values={[0, 250, 500]}
        position={d => d * 2}
        format={d => `${d}`}
      />
    </svg>,
  );
  expect(container).toMatchSnapshot();
});
