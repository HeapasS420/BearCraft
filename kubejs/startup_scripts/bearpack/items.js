// priority: 0
"use strict";

function registerBearPackItems(event) {

  // Bear Coins made by @mcdraws on discord
  global.COIN_TYPES.forEach(type => {
    event.create(`${type}_coin`)
  });

}
