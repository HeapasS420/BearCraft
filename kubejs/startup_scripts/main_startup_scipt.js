// priority: 0
"use strict";

StartupEvents.registry('item', event => {
  registerBearPackItems(event)
  registerExtendedAEItems(event)
})

Platform.mods.kubejs.name = "BearCraft";
