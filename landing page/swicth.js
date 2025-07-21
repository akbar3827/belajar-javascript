var penumpang = [];

var tambahPenumpang = function (namaPenumpang, penumpang) {
     if (penumpang.length === 0) {
          penumpang.push(namaPenumpang);
     }
     else {
          for (var i = 0; i < penumpang.length; i++) {
               if (penumpang[i] === undefined) {
                    penumpang[i] = namaPenumpang;
               }
               else if (penumpang[i] == namaPenumpang) {
                    console.log('nama ' + namaPenumpang + ' sudah ada di dalam angkot');
               }
               else if (i == penumpang.length - 1) {
                    penumpang.push(namaPenumpang);
               }
          }
     }
     return penumpang;
}
var hapusPenumpang = function (namaPenumpang, penumpang) {
     if (penumpang.length == 0) {
          console.log('angkot sedang kosong');
     } else {
          for (var i = 0; i < penumpang.length; i++) {
               if (penumpang[i] === namaPenumpang) {
                    penumpang[i] = undefined;
               }
          }
          console.log(namaPenumpang + ' tidak berada dalam angkot');
     }
     return penumpang;
}

var mahasiswa = {
     nama: 'akbar kurniawan',
     lulus: true,
     IPSemester: [2.90, 3.10, 3.43, 2.58, 3.00],
     IPKumulatif: function () {
          var total = 0;
          var ips = this.IPSemester;
          for (var i = 0; i < IPSemester.length; i++) {
               total += ips[i];
          }
          return total / ips.length;
     }
};
mahasiswa.IPKumulatif();
// if (penumpang.splice() && penumpang.lenght == 0) {
//                console.log('Maaf, angkot sedang kosong');
//                return penumpang;

// var a = '';
// for (var c = 10; c >= 1; c--) {
//     for (var s = 1; s <= c; s++) {
//         a += '*'
//     }
//     for(var x = 1; x <= 10; x++) {
//         a += ' '
//     }
//     a += '\n'
// }
// console.log(a);

// let a = tambah(5000, 4000, 8000, 3000, 10000, 9000, 6000, 7000);

// function tambah() {
//      let hasil = 0;
//      for (let i = 0; i < arguments.length; i++) {
//           hasil += arguments[i];
//      }
//      return hasil;
// }
// console.log(a);

// var coba = function () {
//      var hasil = 1;
//      for (var i = 0; i < arguments.length; i++) {
//           hasil *= arguments[i];
//      }
//      return hasil;
// }
// var b = coba(20938570, 29852853, 9823750, 28395723);
// console.log(b)


// // cara yang kedua
// let kubus1 = 45;
// let kubus2 = 58;
// console.log('diketahui sisi kubus 1 adalah ' + kubus1 + ', dan kubus 2 adalah ' + kubus2);

// function volumeKubus(sisi) {
//      return sisi * sisi * sisi;
// }

// console.log(kubus1 = volumeKubus(45));
// console.log(kubus2 = volumeKubus(58));

// let total = kubus1 + kubus2;

// console.log('hasil dari dua kubus yaitu : ' + total);

// quest juragan angkot array


// let user = prompt('pilih : gajah, semut, ondragend');
// let comp = Math.random();

// if (comp < 0.34) {
//     comp = 'gajah';
// } else if (comp >= 0.34 && comp < 0.67) {
//     comp = 'orang';
// } else {
//     comp = 'semut';
// }
// console.log(comp);

// let hasil = '';

// if (user == comp) {
//     hasil = 'Seri';
// } else if (user == 'gajah' && comp == 'orang') {
//     hasil = 'Menang';
// } else if (user == 'semut' && comp == 'gajah') {
//     hasil = 'menang';
// } else if (user == 'orang' && comp == 'semut') {
//     hasil = 'menang';
// } else {
//     hasil = 'kalah';
// }
// // alert('kamu memilih :' + user + '\nkomputer memilih : ' + comp + '\nhasil : ' + hasil);

// if (hasil == 'menang') {
//     alert('anda MENANG');
// } else if (hasil == 'seri') {
//     alert('anda SERI');
// } else {
//     alert('anda KALAH');
// }