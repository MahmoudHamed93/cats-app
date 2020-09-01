describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('Check If App is open', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('Check If Cats List is there', async () => {
    await expect(element(by.id('Cat-Button-0'))).toBeVisible();
    await element(by.id('Cat-Button-0')).tap();
  });

  it('Check If Back Buttons Works', async () => {
    await expect(element(by.id('back-Button'))).toBeVisible();
    await element(by.id('back-Button')).tap();
  });

  it('Check If URL Link Works', async () => {
    await expect(element(by.id('Cat-Button-0'))).toBeVisible();
    await element(by.id('Cat-Button-0')).tap();
    await expect(element(by.id('wiki-Url'))).toBeVisible();
    await element(by.id('wiki-Url')).tap();
  });
});
