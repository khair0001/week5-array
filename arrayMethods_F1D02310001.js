const kultivator = [
  {
    nama: "Bayu Kopling",
    gender: "M",
    kultivasi: "Ancient God",
    umur: 3000,
  },
  {
    nama: "sakura beban",
    gender: "F",
    kultivasi: "Spirit Severing",
    umur: 3000,
  },
  {
    nama: "Wahyu Spakbor",
    gender: "M",
    kultivasi: "Ancient God",
    umur: 10000,
  },
  {
    nama: "Mikasa Ackerman",
    gender: "F",
    kultivasi: "Golden Core",
    umur: 2000,
  },
  {
    nama: "Tegar Princess",
    gender: "M",
    kultivasi: "Spirit Severing",
    umur: 5000,
  },
  {
    nama: "Anji",
    gender: "M",
    kultivasi: "Ascendant",
    umur: 1000,
  },
  {
    nama: "Alfarizi Uchiha",
    gender: "M",
    kultivasi: "Ascendant",
    umur: 2000,
  },
  {
    nama: "Rama",
    gender: "M",
    kultivasi: "Nascent Soul",
    umur: 400,
  },
  {
    nama: "Aldi",
    gender: "M",
    kultivasi: "Ancient God",
    umur: 4000,
  },
  {
    nama: "Violet Evergarden",
    gender: "F",
    kultivasi: "Ascendant",
    umur: 2000,
  },
];

namaUpperCase = kultivator.map(kultivator => kultivator.nama.toUpperCase())
console.log("1. map(), Mengubah semua nama menjadi huruf besar (UpperCase) : \n", namaUpperCase);

namaLebih5Huruf = kultivator.filter(kultivator => kultivator.nama.length > 5).map(kultivator => kultivator.nama)
console.log("\n2. filter(), Mencari nama dengan panjang lebih dari 5 huruf : \n", namaLebih5Huruf);

namaTotal = kultivator.reduce((total, kultivator) => total + kultivator.nama.length, 0)
console.log("\n3. reduce(), Total semua karakter dari nama : ", namaTotal);
umurTotal = kultivator.reduce((total, kultivator) => total + kultivator.umur, 0)
console.log("   Total semua umur dari kultivator : ", umurTotal);

namaFind = kultivator.find(kultivator => kultivator.nama.includes("Uchiha"))
console.log("\n4. find(), Mencari nama yang mengandung kata 'Uchiha' : \n", namaFind);

namaSome = kultivator.some(kultivator => kultivator.nama.length > 10)
console.log("\n5. some(), Mengecek apakah ada nama yang lebih dari 10 karakter : ", namaSome);

namaEvery = kultivator.every(kultivator => kultivator.nama.length > 3)
console.log("\n6. every(), Mengecek apakah semua nama memiliki panjang lebih dari 3 karakter : ", namaEvery);