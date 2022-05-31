import { newSpecPage } from '@stencil/core/testing';
import { MpfToggle } from '../mpf-toggle';

describe('mpf-toggle', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MpfToggle],
      html: `<mpf-toggle></mpf-toggle>`,
    });
    expect(page.root).toEqualHtml(`
      <mpf-toggle>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </mpf-toggle>
    `);
  });
});
