import {Selector} from 'testcafe';

/**
 * Default page object model
*/
export default class SearchResultPage {
  /**
   * Represents a page
   * @contructor
   */
  constructor() {
    this.queryBox = Selector('input[name="query"]');
    this.queryButton = Selector('button[data-identifier="searchButton"]');
    this.facets = Selector('form[data-identifier="facetnavigation-form"]');
    
    // todo: fix
    this.brandFilters = Selector('#facet2');
    this.secondFilter = Selector('#facet2element2');
    this.searchResultHeader = Selector('h1[data-identifier="srp-headline"]');
  }
};
