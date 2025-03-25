/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_100374818")

  // add field
  collection.fields.addAt(3, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2353520092",
    "hidden": false,
    "id": "relation3846132552",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "startingAsset",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_100374818")

  // remove field
  collection.fields.removeById("relation3846132552")

  return app.save(collection)
})
