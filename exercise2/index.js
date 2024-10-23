(function(callback) {
    const berat = parseFloat(prompt("Masukkan berat badan (kg) :"));
    const tinggi_cm = parseFloat(prompt("Masukkan tinggi badan (cm) :"));
    const tinggi_m = tinggi_cm / 100;
    const bmi = callback(berat, tinggi_m);
    console.log("Nilai BMI Anda adalah : ${bmi.toFixed(2)}");
})(function(berat, tinggi) {
    return berat / (tinggi * tinggi);
});