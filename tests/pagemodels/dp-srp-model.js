import {Selector} from 'testcafe'

/** 
 * SearchResultPage object model
 * Selector strings are copied from chrome. 
*/

let searchBoxSelector = 
    "#rootWrapper > header > div > div > div.mms-app-header-control-row > div.mms-app-header-searchbox > div > div > div > input"
let searchButtonSelector =
    '#rootWrapper > header > div > div > div.mms-app-header-control-row > div.mms-app-header-searchbox > div > div > div > button';

// TODO: Rename & Remove RISE page
export default class SearchResultPageDP {
    constructor() {
        this.searchBox =  Selector(searchBoxSelector);
        this.searchButton = Selector(searchButtonSelector);
    }
};
