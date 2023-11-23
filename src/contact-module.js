const contentDiv = document.querySelector('.content')

export function loadContact() {
    contentDiv.textContent = '';
    const heading = document.createElement('h1')
    const img = document.createElement('img')
    const paragraph = document.createElement('p')

    heading.textContent = 'CONTACT'
    img.src = '/img/restaurace.jpg'
    paragraph.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium voluptates, a unde quam quia suscipit inventore, quidem, tempora natus maxime harum atque cupiditate dolor! Dolor pariatur aliquam ipsum ab nesciunt.'

    contentDiv.appendChild(heading);
    contentDiv.appendChild(img);
    contentDiv.appendChild(paragraph);
}