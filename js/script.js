// Welcome message with user's name
const welcomeMessage = document.querySelector(".banner h1");
const welcomeName = document.getElementById("welcome-name");

// Get the user's name from a prompt or input
const userName = prompt("Enter your name:");
const formattedName = formatName(userName);
welcomeName.textContent = formattedName;
welcomeMessage.textContent = `Hi ${formattedName}, Welcome to RevoU Website`;

function formatName(name) {
    // Convert the input to lowercase and capitalize the first letter
    return name.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
}

// Ambil elemen tautan
const profileLink1 = document.querySelector('a[href="#home"]');

// Atur event listener untuk tautan
profileLink1.addEventListener('click', function (event) {
    event.preventDefault(); // Mencegah perilaku tautan bawaan
    const section = document.getElementById('home');
    const sectionPosition = section.getBoundingClientRect().top;
    window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth' // Efek animasi scrolling
    });
});

// Ambil elemen tautan
const profileLink2 = document.querySelector('a[href="#our-profile"]');

// Atur event listener untuk tautan
profileLink2.addEventListener('click', function (event) {
    event.preventDefault(); // Mencegah perilaku tautan bawaan
    const section = document.getElementById('our-profile');
    const offset = 85; // Sesuaikan offset sesuai dengan tinggi header Anda
    const sectionPosition = section.getBoundingClientRect().top;
    window.scrollTo({
        top: sectionPosition + window.scrollY - offset,
        behavior: 'smooth' // Efek animasi scrolling
    });
});

// Ambil elemen tautan
const profileLink3 = document.querySelector('a[href="#vision-mission"]');

// Atur event listener untuk tautan
profileLink3.addEventListener('click', function (event) {
    event.preventDefault(); // Mencegah perilaku tautan bawaan
    const section = document.getElementById('vision-mission');
    const offset = 85; // Sesuaikan offset sesuai dengan tinggi header Anda
    const sectionPosition = section.getBoundingClientRect().top;
    window.scrollTo({
        top: sectionPosition + window.scrollY - offset,
        behavior: 'smooth' // Efek animasi scrolling
    });
});

// Ambil elemen tautan
const profileLink4 = document.querySelector('a[href="#message"]');

// Atur event listener untuk tautan
profileLink4.addEventListener('click', function (event) {
    event.preventDefault(); // Mencegah perilaku tautan bawaan
    const section = document.getElementById('message');
    const offset = 85; // Sesuaikan offset sesuai dengan tinggi header Anda
    const sectionPosition = section.getBoundingClientRect().top;
    window.scrollTo({
        top: sectionPosition + window.scrollY - offset,
        behavior: 'smooth' // Efek animasi scrolling
    });
});

// Ambil elemen formulir dan elemen hasil
const form = document.querySelector('form');
const resultName = document.getElementById('result-name');
const resultBirthdate = document.getElementById('result-birthdate');
const resultGender = document.getElementById('result-gender');
const resultMessage = document.getElementById('result-message');

// Atur event listener untuk saat formulir disubmit
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah perilaku bawaan saat submit

    // Ambil nilai-nilai dari elemen-elemen input dan select
    const name = document.getElementById('name').value;
    const birthdate = document.getElementById('tanggalLahir').value;
    const gender = document.getElementById('jenisKelamin').value;
    const message = document.getElementById('pesan').value;

    // Tampilkan nilai-nilai dalam elemen hasil
    resultName.textContent = name;
    resultBirthdate.textContent = birthdate;
    resultGender.textContent = gender;
    resultMessage.textContent = message;
});