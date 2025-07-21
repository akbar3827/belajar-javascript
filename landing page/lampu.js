var jumlahAngkot = 10;
var angkotBeroperasi = 6; //opsi pertama

// while (noAngkot <= jumlahAngkot) {
//     console.log('Angkot No.' + noAngkot + ' beroperasi dengan baik.');
//     noAngkot++;
// }
for (var noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++) {
    if (noAngkot <= 4 || noAngkot === 6) {
        console.log('Angkot No.' + noAngkot + ' beroperasi dengan baik.');
    } else if ( noAngkot === 5 || noAngkot === 8 || noAngkot === 10) {
        console.log('angkot No.' + noAngkot + ' sedang lembur');
    }
    else {
        console.log('Angkot No.' + noAngkot + ' sedang tidak beroperasi.');
    }
}
// var noAngkot = 7;
// var jumlahAngkot = 10; //opsi kedua
// while (noAngkot <= jumlahAngkot) {
//     console.log('angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
//     noAngkot++;
// }