// Array produk awal
let produkToko = [
  { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
  { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
  { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
];

// Fungsi menampilkan produk ke tabel HTML
function tampilkanProduk() {
  let tbody = document.querySelector("#tabelProduk tbody");
  tbody.innerHTML = ""; // kosongkan isi tabel

  produkToko.forEach((produk) => {
    let row = `
      <tr>
        <td>${produk.id}</td>
        <td>${produk.nama}</td>
        <td>Rp${produk.harga.toLocaleString()}</td>
        <td>${produk.stok}</td>
        <td><button onclick="hapusProduk(${produk.id})">Hapus</button></td>
      </tr>
    `;
    tbody.innerHTML += row;
  });
}

// Fungsi menambah produk baru
function tambahProduk() {
  let nama = document.getElementById("nama").value;
  let harga = parseInt(document.getElementById("harga").value);
  let stok = parseInt(document.getElementById("stok").value);

  if (!nama || isNaN(harga) || isNaN(stok)) {
    alert("Harap isi semua data produk dengan benar!");
    return;
  }

  let idBaru = produkToko.length > 0 ? produkToko[produkToko.length - 1].id + 1 : 1;
  let produkBaru = { id: idBaru, nama: nama, harga: harga, stok: stok };
  produkToko.push(produkBaru);

  // Reset input form
  document.getElementById("nama").value = "";
  document.getElementById("harga").value = "";
  document.getElementById("stok").value = "";

  tampilkanProduk();
}

// Fungsi menghapus produk
function hapusProduk(id) {
  let index = produkToko.findIndex((produk) => produk.id === id);
  if (index !== -1) {
    if (confirm(`Yakin ingin menghapus produk "${produkToko[index].nama}"?`)) {
      produkToko.splice(index, 1);
      tampilkanProduk();
    }
  }
}

// Tampilkan produk pertama kali
tampilkanProduk();
