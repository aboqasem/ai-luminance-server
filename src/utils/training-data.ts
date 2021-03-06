import luminance from './relative-luminance';
import { randomRGB, relativeRGB } from './rgb-helpers';

const data: {
  input: {
    r: string;
    g: string;
    b: string;
  };
  output: { Light: 1 | 0; Dark: 1 | 0 };
}[] = [];

(() => {
  for (let i = 0; i < 500; i += 1) {
    const rgb = randomRGB();
    const l = luminance(rgb);
    const { r, g, b } = relativeRGB(rgb);
    if (l > 0.5) {
      data.push({
        input: {
          r: r.toFixed(2),
          g: g.toFixed(2),
          b: b.toFixed(2),
        },
        output: {
          Light: 1,
          Dark: 0,
        },
      });
    } else {
      data.push({
        input: {
          r: r.toFixed(2),
          g: g.toFixed(2),
          b: b.toFixed(2),
        },
        output: {
          Light: 0,
          Dark: 1,
        },
      });
    }
  }
})();

export default data;
