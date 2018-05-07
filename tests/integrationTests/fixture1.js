import {ClientFunction, Selector} from 'testcafe';
import SearchResultPage from '../pagemodels/page-model';

/**
 * Set cookies law cookie to disable the accept layer:
 */
const setCookiesCookie = new ClientFunction(() => {
  const myDate = new Date();
  myDate.setFullYear(myDate.getFullYear + 2);
  document.cookie = `MC_PRIVACY=marketing;expires=${myDate};path=/`;
});

fixture `Search Result Page`
  .page `http://perf.mediamarkt.de/de/search.html?searchProfile=onlineshop&channel=mmdede&forceSrp=B&query=`
  .before(async (ctx) => {
    setCookiesCookie();
  });

const page = new SearchResultPage();

test('Load SRP Page', async (t) => {
  await t
    .typeText(page.queryBox, 'dab')
    .click(page.queryButton)
    .expect(page.queryBox.value).eql('dab')
    .expect(page.facets.exists).ok();
});

test('Apply filter on SRP Page', async (t) => {
    await t
    .typeText(page.queryBox, 'dab')
    .click(page.queryButton)
    .click(page.brandFilters)  
    .expect(page.searchResultHeader.innerText).contains('23 Produkte');  
});
