import StoreHouse from './storeHouseModel.js';

class StoreHouseView {
  constructor() {
    this.main = $('main');
    this.categories = $('#categories');
    this.stores = $('#stores');
  }

  init() {
    this.main.empty();
  }

  showStores(_stores) {
    _stores.forEach(store => {
      this.stores.append("<li><a class='dropdown-item' href='#' id=" + store.CIF + ">" + store.name + "</a></li>");
    });
  }

  showCategories(_categories) {
    _categories.forEach(category => {
      this.categories.append("<li><a class='dropdown-item' href='#' id=" + category.title + ">" + category.title + "</a></li>");
    });
  }

  bindInit(handler) {
    $('#init').click((event) => {
      handler();
    });
    $('#logo').click((event) => {
      handler();
    });
  }

}

export default StoreHouseView;
