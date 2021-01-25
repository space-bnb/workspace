const puppeteer = require ('puppeteer');
const pageUrl = 'http://localhost:4000/';

let page;
let browser;
const width = 1280;
const height = 720;

// beforeAll(async () => {
//   browser = await puppeteer.launch({
//     headless: false,
//     slowMo: 80,
//     args: [`--window-size=${width}, ${height}`]
//   });
//   page = await browser.newPage();
//   await page.setViewport({ width, height });
// });

// afterAll(() => {
//   browser.close();
// })

describe('testing page load', () => {

//   beforeEach(async () => {
//     await page.goto(pageUrl, { waitUntil: 'networkidle2' });
//   });

  test('/getall gets correct number of records', async () => {
//     let repos = '.repos';
//     const repoCount = await page.$eval(repos, e => e );
//     expect(repoCount).toEqual('REPOS: 100');
  });

});