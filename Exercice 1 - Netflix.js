// Liste de tous les ﬁlms (type : Movie)
db.netflix.find({type: "Movie"}).pretty()

// Liste de toutes les series (type : TV Show)
db.netflix.find({type: "TV Show"}).pretty()

// Liste le nombre de série française
db.netflix.count({country: "France", type: "TV Show"})
db.netflix.find( { type: "TV Show", country : "France" }).count();

// Liste le nombre de ﬁlm américain
db.netflix.count({country: "United States", type: "Movie"})
db.netflix.find( { type: "Movie", country : "United States" }).count();

//  Liste de tous les ﬁlms sortie après 2010
db.netflix.find({type: "Movie", "release_year": {$gt: 2010}}).pretty()

//  Liste de toutes les series dont la sortie est comprise entre 2015 et 2020 
db.netflix.find({ type: "TV Show", "release_year" : { $gt: 2015 , $lt: 2020 } }).pretty();

// Liste de toutes les series dont le director n’est pas renseigné
db.netflix.find({type: "TV Show", director:""}).pretty()

// Liste le nombre de ﬁlm dans lesquels “Eliza Taylor” ﬁgure (présente dans le cast) 
db.netflix.find({ type: "Movie", "cast" : { $regex: ".Eliza Taylor." } }).count();

//  Liste le nom  de tous les ﬁlms qui ont une durée supérieur a 120 minutes
db.netflix.find({type: "Movie", "duration": {$elemMatch: {$gt: "120 min"}}}).pretty()