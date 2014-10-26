function(doc) {
  if(doc.category) {
    emit(doc.category, doc);
  }
}



function(key, values, rereduce) {
  return values.length;
}