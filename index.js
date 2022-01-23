
const puppeteer = require('puppeteer');


(async () => {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto('https://xvideos.com');
  await page.waitForNavigation();


  // - Acessa a página de login
  await page.click('[href="/account"]');

  // Troque os valores de process.env.UNSPLASH_EMAIL e process.env.UNSPLASH_PASS pelo seu login e senha :)
  await page.type('[type="email"]', 'osdcv3@gmail.com')
  await page.type('[name="signin-form[password]"]', 'kastro2000')


  await page.click('[type="submit"]')

  await page.waitForNavigation();

  await page.screenshot({path: 'teste.png'})

  // ACESSAR essa pagina
  //await page.goto('https://xvideos.com');

  // Like nessa coisa
  //await page.click('[title="Like photo"]')

  



   await browser.close();
})();