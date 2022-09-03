const loadphones = async() => {
    const url = 'https://openapi.programming-hero.com/api/phones?search=iphone';
    const res = await fetch(url);
    const data = await res.json();
    displayPhons(data.data)
}

const displayPhons = phones => {
    const phoneContainer = document.getElementById('phone-container');
    phones.forEach(phone => {
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        phoneDiv.innerHTML = `
            <div class="card h-100">
                <img src="${phone.image}" class="card-img-top p-3" height="270px" width="100px" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Phone Name: ${phone.phone_name}</h5>
                    <h6 class="card-title">Brand: ${phone.brand}</h6>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.</p>
                </div>
            </div>
        `
        phoneContainer.appendChild(phoneDiv);
    });
}

loadphones()