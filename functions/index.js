const functions = require('firebase-functions');

exports.makeUppercase = functions.database.ref('/gangsters/{gangsterId}/ratings/{ratingId}')
  .onCreate((snapshot, context) => {
    const ratings = snapshot.val();
    console.log(ratings);
    return

    const ratingValues = Object.keys(ratings).map(item => parseInt(item))
    const sumRating = ratingValues.reduce((sum, val) => sum + val);
    console.log('sumRating', sumRating);

    return snapshot.ref.parent.child('rating').set(sumRating/ratingValues.length);

  });