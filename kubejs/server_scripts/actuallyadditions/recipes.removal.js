// priority: 0
"use strict";

function removeActuallyAdditionsRecipes(event) {

  global.ACTUALLY_ADDITIONS_DISABLED_ITEMS.forEach(item => {
    event.remove({ input: item })
    event.remove({ output: item })
  })

}
