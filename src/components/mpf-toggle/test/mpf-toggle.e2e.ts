import { newE2EPage } from '@stencil/core/testing';

describe('mpf-toggle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<mpf-toggle></mpf-toggle>');

    const element = await page.find('mpf-toggle');
    expect(element).toHaveClass('hydrated');
  });
});
