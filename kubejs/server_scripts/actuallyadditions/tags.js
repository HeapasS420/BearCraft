"use strict";

function registerActuallyAdditionsItemTags(event) {

  global.ACTUALLY_ADDITIONS_DISABLED_ITEMS.forEach(item => {
    event.removeAllTagsFrom(item)
    event.add('c:hidden_from_recipe_viewers', item)
  })

}
