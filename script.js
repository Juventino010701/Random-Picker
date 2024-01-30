document.addEventListener('DOMContentLoaded', function() {
    const checkButton = document.getElementById('checkButton');
    const resetButton = document.getElementById('resetButton');
    const resultDiv = document.getElementById('result');
    const numberInput = document.getElementById('number');

    checkButton.addEventListener('click', function() {
        const randomNumber = Math.floor(Math.random() * 1000);
        const inputNumber = parseInt(numberInput.value);

        if (isNaN(inputNumber)) {
            resultDiv.innerText = 'Masukkan angka terlebih dahulu';
        } else if (inputNumber < 0 || inputNumber > 999) {
            resultDiv.innerText = 'Masukkan angka antara 0 dan 999';
        } else {
            if (inputNumber === randomNumber) {
                resultDiv.innerText = `Selamat! Angka Anda ${inputNumber} adalah angka yang sama dengan angka yang keluar (${randomNumber})`;
            } else {
                resultDiv.innerText = `Maaf, angka yang keluar adalah ${randomNumber}. Coba lagi!`;
            }
            // Menampilkan tombol reset setelah fungsi check dijalankan
            resetButton.style.display = 'block';
        }
    });

    resetButton.addEventListener('click', function() {
        numberInput.value = '';
        resultDiv.innerText = '';
        // Menyembunyikan tombol reset setelah direset
        resetButton.style.display = 'none';
    });
});
