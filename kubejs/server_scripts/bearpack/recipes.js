"use strict";

function registerBearPackRecipes(event) {

  event.shapeless("5x kubejs:copper_coin", "kubejs:silver_coin")
  event.shapeless("kubejs:silver_coin", [
      '5x kubejs:copper_coin'
    ]
  );

  event.shapeless("5x kubejs:silver_coin", "kubejs:gold_coin")
  event.shapeless("kubejs:gold_coin", [
      '5x kubejs:silver_coin'
    ]
  );

}
