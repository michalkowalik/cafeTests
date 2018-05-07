import {ClientFunction, Selector} from 'testcafe';
import SearchResultPageDP from '../pagemodels/dp-srp-model';

const page = new SearchResultPageDP();

fixture `DP Search Result Page`
    .page `http://webmobile-pwasrp.dev.mms.d-p.io/de/search.html`

test('Search box exist', async (t) => {
    await t
        .expect(page.searchBox.exists).ok();
});

test('Search button exists', async (t) => {
    await t
        .expect(page.searchButton.exists).ok();
});

test('Load SRP', async (t) => {
    await t
        .typeText(page.searchBox, 'waschmachine')
        .click(page.searchButton)
        .expect(page.searchBox.value).eql('waschmachine');
});