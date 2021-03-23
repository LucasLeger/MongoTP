// Liste de tous les passagers âgés de 40 ans ou plus 
db.titanic.find({ Age: { $gte: 40} }).pretty();

// Liste de tous les passagers par ordre de leur ID (PassangerId)
db.titanic.find().sort({ PassengerId:+1 }).pretty();

// Combien de passagers du titanic sont mort ? Donnez le résultat avec la requête associer.
db.titanic.find({ Survived: "0" }).count();

// Combien de passagers du titanic ont survécu ? Donnez le résultat avec la requête associer.
db.titanic.find({ Survived: "1" }).count();

// Affichez les noms de tous les passagers masculins ayant survécu et âgé de moins de 30 ans. 
db.titanic.find({ Sex: "male", Survived: "1", Age: { $lt: 30 } }).count();

// Affichez les noms de tous les passagers féminins ayant survécu et âgé de plus de 30 ans.
db.titanic.find({ Sex: "female", Survived: "1", Age: { $gt: 30 } }).count();
