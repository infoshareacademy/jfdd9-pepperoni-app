const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const reduce = Function.bind.call(Function.call, Array.prototype.reduce);
const isEnumerable = Function.bind.call(Function.call, Object.prototype.propertyIsEnumerable);
const concat = Function.bind.call(Function.call, Array.prototype.concat);
const keys = Reflect.ownKeys;

if (!Object.values) {
  Object.values = function values(O) {
    return reduce(keys(O), (v, k) => concat(v, typeof k === 'string' && isEnumerable(O, k) ? [O[k]] : []), []);
  };
}

if (!Object.entries) {
  Object.entries = function entries(O) {
    return reduce(keys(O), (e, k) => concat(e, typeof k === 'string' && isEnumerable(O, k) ? [[k, O[k]]] : []), []);
  };
}

exports.countAverageRating = functions.database.ref('/gangsters/{gangsterId}/ratings/{ratingId}')
  .onCreate((snapshot, context) => {
    // const rating = snapshot.val();
    const gangsterId = context.params.gangsterId;
    //console.log(gangsterId);

    return admin.database().ref('/gangsters/' + gangsterId + '/ratings').once('value').then((snapshot) => {
      const values = Object.values(snapshot.val() || {});
      //console.log(values);

     return admin.database().ref('/gangsters/' + gangsterId + '/avgRating').set(
         Math.round(values.reduce((total, next) => total + next, 0) / values.length)
      ).then(
        val => console.log(val)

      )
    })

});