const contentDiv = document.querySelector('.content')

export function loadAboutUs() {
    contentDiv.textContent = '';
    const heading = document.createElement('h1')
    const img = document.createElement('img')
    const paragraph = document.createElement('p')

    heading.textContent = 'About US'
    img.src = '/img/restaurace.jpg'
    paragraph.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis magni molestiae error? Maiores non illo aut maxime reiciendis, quod ab iusto dolorem iure est tempora molestiae quam doloremque voluptas quae?'

    contentDiv.appendChild(heading);
    contentDiv.appendChild(img);
    contentDiv.appendChild(paragraph);
}