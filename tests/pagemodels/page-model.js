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
    this.queryBox = new Selector('input[name="query"]');
    this.queryButton = new Selector('button[data-identifier="searchButton"]');
    this.facets = new Selector('form[data-identifier="facetnavigation-form"]');
  }
};
