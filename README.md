Nama : Ahmad Muslihul Khair**

**NIM : F1D02310001**

**Kelas : B**

- Membuat file javaScript dengan nama "*arrayMethods_F1D02310001.js*"
- Membuat data array buatan sendiri minimal 10 element, misalkan saya membuat data kultivator, seperti berikut :

``` javascript 
	{
	nama: "Bayu Kopling",
    gender: "M",
    kultivasi: "Ancient God",
    umur: 3000,
    },
```
- Menerapkan ke-enam metode array *(map, filter, reduce, find, some, every)*

1. ***map()*** digunakan untuk mengubah semua nama karakter jadi huruf besar (*uppercase*).
``` javascript
namaUpperCase = kultivator.map(kultivator => kultivator.nama.toUpperCase())
```

2. ***filter()*** digunakan untuk menyaring nama yang panjangnya lebih dari 5 huruf, lalu menampilkan hanya nama-namanya saja.
``` javascript
namaLebih5Huruf = kultivator.filter(kultivator => kultivator.nama.length > 5).map(kultivator => kultivator.nama)
```

3. ***reduce()*** saya pakai untuk menjumlahkan total karakter dari semua nama dan juga menjumlahkan semua umur kultivator.
``` javascript
namaTotal = kultivator.reduce((total, kultivator) => total + kultivator.nama.length, 0)
umurTotal = kultivator.reduce((total, kultivator) => total + kultivator.umur, 0)
```

4. ***find()*** saya gunakan untuk mencari kultivator yang namanya mengandung kata `uchiha` .
``` javascript
namaFind = kultivator.find(kultivator => kultivator.nama.includes("Uchiha"))
```

5. ***some()*** dipakai untuk mengecek apakah ada karakter yang punya nama lebih dari 10 huruf yang hasilnya akan `true` atau `false`.
``` javascript
namaSome = kultivator.some(kultivator => kultivator.nama.length > 10)
```

6. ***every()*** dipakai untuk mengecek apakah semua karakter punya nama lebih dari 3 huruf yang hasilnya `true` atau `false`.
``` javascript
namaEvery = kultivator.every(kultivator => kultivator.nama.length > 3)
```

### Screenshot Hasil Program
<img width="780" height="676" alt="Screenshot 2025-09-21 225422" src="https://github.com/user-attachments/assets/33b42bcb-bb09-4fd6-be99-58b8579bc910" />
