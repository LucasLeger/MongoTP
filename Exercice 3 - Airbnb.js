db.airbnb.updateMany({}, [{$set: { location : { type: "Point", coordinates: [ "$longitude", "$latitude" ] } } } ]);
db.airbnb.createIndex( { location : "2dsphere" } );

/* Liste de tous les Airbnbs autour de Empire State Building dans un rayon de 10 km avec un prix inférieur ou égal a 150 
et un minimum de nuit supérieure ou égale a 3 */
db.airbnb.find( 
    { location : { $near : {
    $geometry: { type: "Point", coordinates: [ -73.98566, 40.74844 ] },
    $maxDistance: 10000
        }
    }}, { price: { $lte: 150 } }, { minimum_nights: { $gte: 3 } }
     ).pretty();

/*  Liste de tous les Airbnbs compris dans la zone 
“Washington Square park - Prospect Park Zoo - Maria Hernandez Park” */
db.airbnb.find( 
    { location : { $geoWithin : {
    $geometry: { type: "Polygon", coordinates: [ [ [ -73.92386, 40.70312 ], [ -73.99733, 40.73088 ], [ -73.96895, 40.6602 ], [ -73.92386, 40.70312 ] ] ]}
        }}}).pretty();

// Mettre a jour tous les Airbnbs qui ont un review par mois supérieur a 1 en ajoutant l’information suivante :
db.airbnb.insertMany({"reviews_per_month": {$gt: 1}}, {$set: {
    "Reviews":[
        {
            "author": "author 1",
            "comments": "comments 1",
            "note": 7,
            "createdAt": new Date()
        },
        {
            "author": "author 2",
            "comments": "comments 2",
            "note": 8,
            "createdAt": new Date()
        },
        {
            "author": "author 3",
            "comments": "comments 3",
            "note": 4,
            "createdAt": new Date()
        }
    ]}})

/* Mettre à jour tous les reviews des Airbnbs qui ont un review par mois supérieur a 1 et 
une note supérieure à 5 en ajoutant le ﬁeld suivant “ goodRating: true */
