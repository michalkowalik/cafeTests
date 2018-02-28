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

  /**
   * Built-in assert if facets navigation is visible
   * @return {boolean} true if one and only one facetnavigation form is rendered
   */
  facetsVisible() {
    console.log(this.facets.count);
    return 1 === this.facets.count;
  }
};
