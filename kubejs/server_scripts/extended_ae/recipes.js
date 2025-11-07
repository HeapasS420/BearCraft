"use strict";

function registerExtendedAE2Recipes(event) {

  function cell(output, item ){
    event.shaped(output, [
        'QIQ',
        'ICI',
        'BBB'
      ], {
        Q: 'ae2:quartz_glass',
        I: item,
        C: 'advanced_ae:quantum_storage_component',
        B: 'advanced_ae:quantum_alloy_plate'
      }
    )
  }

  global.EXTENDED_AE_FLUID_CELLS.forEach(type => {
    const t = type.split(":");
    cell(`kubejs:${t[1]}_cell`, `${t[0]}:${t[1]}_bucket`)
  })

  global.EXTENDED_AE_ITEM_CELLS.forEach(type => {
    const t = type.split(":");
    cell(`kubejs:${t[1]}_cell`, `${t[0]}:${t[1]}`)
  })

}
