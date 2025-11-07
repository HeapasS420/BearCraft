function registerExtendedAEItems(event) {

  global.EXTENDED_AE_FLUID_CELLS.forEach(type => {
		var t = type.split(":");
    event.create(`${t[1]}_cell`, 'custom_infinity_cell')
      .texture(`kubejs:item/${t[1]}_cell`)
      .itemType(`${t[0]}:${t[1]}`)
      .cellModel(`kubejs:block/drive/${type[1]}_cell`)
  })

  global.EXTENDED_AE_ITEM_CELLS.forEach(type => {
		var t = type.split(":");
    event.create(`${t[1]}_cell`, 'custom_infinity_cell')
      .texture(`kubejs:item/${t[1]}_cell`)
      .itemType(`${t[0]}:${t[1]}`)
      .cellModel(`kubejs:block/drive/${t[1]}_cell`)
  })

}
