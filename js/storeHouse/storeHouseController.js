"use strict";
import StoreHouse from './storeHouseModel.js';
import {
  BaseException,
  InvalidAccessConstructorException,
  EmptyValueException,
  InvalidValueException,
  AbstractClassException,
  NotExistException,
  ExistException
} from '../exceptions.js';
import { Product, Processor, Graphic_Card, RAM } from './storeHouseModel.js';
import { Category } from './storeHouseModel.js';
import { StoreException, CoordsStoreException, Store, Coords } from './storeHouseModel.js';

class StoreHouseController {
  //Campos privados
  #storeHouseModel;
  #storeHouseView;
  #stores;
  #categories;

  #loadStoreHouseObjects() {

    let cat1 = new Category("Gaming RGB", "Componentes destinados al gaming con leds añadidos");
    let cat2 = new Category("Gaming minimal", "Componetes destinados al gaming con un diseño minimalista");
    let cat3 = new Category("Ofimatica", "Componentes destinados para un uso básico");

    this.#categories = [cat1, cat2, cat3]

    let shop1 = new Store("12345", "Amazon", "Ramirez de prado, 5, 28045, Madrid, Madrid, España", "34697632123", new Coords(7698769.3, 647));
    let shop2 = new Store("54321", "PC Componentes", "Avenida de Europa (pg ind las Salinas Parc. 2-5 y 2-6), , Alhama de Murcia, Murcia, España", "34785723102", new Coords(54231.23, 15423.2));
    let shop3 = new Store("32145", "Aliexpress", "Carrer de Laureà Miró, 20, 08950 Esplugues de Llobregat, Barcelona, España.", "34612321102", new Coords(143, 23));

    this.#stores = [shop1, shop2, shop3];

    let p1 = new Processor("432214321423", "I5 10400F", "Not bad", "125€", 21, "i510400f.img", "2.9GHz", "LG20", "R300", "No");
    let p2 = new Processor("d23141234", "I5 12400F", "GOOD", "125€", 21, "i512400f.img", "3.5GHz", "LG20", "R300", "No");
    let p3 = new Graphic_Card("432214321429", "3080", "So GOOD", "1225€", 21, "3080.img", "NVIDIA", "basic", "10GB");
    let p4 = new Graphic_Card("23423151234", "3060 ti", "GOOD", "525€", 21, "3060ti.img", "NVIDIA", "TI1", "8GB");
    let p5 = new RAM("qrweds14321423", "Kingstom", " bad", "35€", 21, "asus4gb.img", "DDR2", "4GB", "2666MHz");
    let p6 = new RAM("4135o3o1", "ASUS", "Not bad", "55€", 21, "asus4gb.img", "DDR2", "4GB", "2666MHz");


    this.#storeHouseModel.addShop(shop1);
    this.#storeHouseModel.addShop(shop2);
    this.#storeHouseModel.addShop(shop3);
    this.#storeHouseModel.addCategory(cat1);
    this.#storeHouseModel.addCategory(cat2);
    this.#storeHouseModel.addCategory(cat3);
    this.#storeHouseModel.addProduct(p6, [cat3]);
    this.#storeHouseModel.addProduct(p1, [cat1]);
    this.#storeHouseModel.addProduct(p2, [cat2]);
    this.#storeHouseModel.addProduct(p3, [cat3]);
    this.#storeHouseModel.addProduct(p4, [cat1, cat2]);
    this.#storeHouseModel.addProduct(p5, [cat2, cat3]);
    this.#storeHouseModel.addProductInShop(p2, shop1, [cat2]);
    this.#storeHouseModel.addProductInShop(p1, shop1, [cat1]);
    this.#storeHouseModel.addProductInShop(p2, shop2, [cat2]);
    this.#storeHouseModel.addProductInShop(p3, shop3, [cat3]);
    this.#storeHouseModel.addProductInShop(p4, shop1, [cat1, cat2]);
    this.#storeHouseModel.addProductInShop(p6, shop2, [cat2, cat3]);
    this.#storeHouseModel.addQuantityProductInShop(p2, shop1, 5);
    this.#storeHouseModel.addQuantityProductInShop(p1, shop1, 7);
    this.#storeHouseModel.addQuantityProductInShop(p2, shop2, 3);
    this.#storeHouseModel.addQuantityProductInShop(p3, shop3, 9);
    this.#storeHouseModel.addQuantityProductInShop(p4, shop1, 2);


  }


  constructor(storeHouseModel, storeHouseView) {
    this.#storeHouseModel = storeHouseModel;
    this.#storeHouseView = storeHouseView;

    // Eventos iniciales del Controlador
    this.onInit();
    this.onLoad();

    // Enlazamos handlers con la vista
    this.#storeHouseView.bindInit(this.handleInit);
  }

  onInit = () => {
    this.#storeHouseView.init();
  }

  handleInit = () => {
    this.onInit();
  }

  onLoad = () => {
    this.#loadStoreHouseObjects();
    this.#storeHouseView.showStores(this.#stores);
    this.#storeHouseView.showCategories(this.#categories);
  }

}

export default StoreHouseController;
