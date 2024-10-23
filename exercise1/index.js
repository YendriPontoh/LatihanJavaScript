function calculateBMI(berat, tinggi){
    const bmi = berat / (tinggi * tinggi);
    return bmi
}
const berat = parseFloat(prompt("Masukkan berat badan (kg) :"));
const tinggi_cm = parseFloat(prompt("Masukkan tinggi badan (cm) :"));
const tinggi_m = tinggi_cm / 100;
const bmi = calculateBMI(berat, tinggi_m);
console.log("Nilai BMI anda adalah : $(bmi.toFixed(2)}");