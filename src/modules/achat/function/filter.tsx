

export function categoryFilter(filter, data) {
  data = [...data];
  if (!filter.category) return data
  let subCats = filter.category.sous_categories
  subCats = subCats.map((cat) => cat.id)
  data = data.filter((offer) => subCats.find((cat) => cat == offer.sous_category_id))
  return data;
}

export function subCategoryFilter(filter, data) {
  data = [...data];
  if (!filter.subCategory || !filter.subCategory.id) return data
  data = data.filter((offer) => filter.subCategory.id == offer.sous_category_id)
  return data;
}

export function nameFilter(filter, data) {
  if (!data) return
  data = [...data];
  if (filter.name) {
    try {
      data.sort((a, b) => {
        if (filter.name == "asc") {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
        } else {
          if (a.name > b.name) {
            return -1;
          }
          if (a.name < b.name) {
            return 1;
          }
        }
        return 0;
      })
    } catch (error) {
      console.error("Error while sorting ", error);
    }
  }
  return data;
}