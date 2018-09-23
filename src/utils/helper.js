/*
Helper Functions that exports functions from the multiple helper files in the "helper" folder
The functions are always defined with an "_" prefix to make it easier to search

The following categories of helper files exist
* 1. Form Helpers
*/
export function convertObjectOfObjectsToArrayOfObjects(ObjectOfObjects) {
    if (ObjectOfObjects && Object.keys(ObjectOfObjects).length > 0) {
      return Object.keys(ObjectOfObjects).map(key => {
        let ar = ObjectOfObjects[key]
        // Apppend key if one exists (optional)
        if (ar) {
          ar.keyOfObj = key
        }
        return ar
      })
    }
    return []
}
  

export * from './helper/formHelper';