var animals = [
    { species: 'Lion', name: 'King'},
    { species: 'Whale', name: 'Water'},
    { species: 'Gazelle', name: 'Nagi'}
];

for (var i=0; i < animals.length; i++) {
    (function(i) {
        console.log('#' + i + ' ' + this.species + ': ' + this.name);
    }).call(animals[i], i);
}