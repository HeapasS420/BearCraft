// priority: 0
"use strict";

function removeSilentGemsRecipes(event) {

  global.SILENTGEMS_DISABLED_ITEMS.forEach(item => {
    event.remove({ input: item })
    event.remove({ output: item })
  })

}
