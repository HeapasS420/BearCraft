"use strict";

function registerActuallyAdditionsRecipes(event) {

  removeActuallyAdditionsRecipes(event)

  event.shaped(Item.of('actuallyadditions:rice_slimeball'),
    [
      ' B ',
      'BAB',
      ' B '
    ],
    {
      A: 'minecraft:water_bucket',
      B: 'vampiresdelight:rice_dough'
  })

}
