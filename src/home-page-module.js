const contentDiv = document.querySelector('.content')

export function loadHomePage() {
    contentDiv.textContent = '';
    const heading = document.createElement('h1')
    const img = document.createElement('img')
    const paragraph = document.createElement('p')

    heading.textContent = 'RESTAURACE NA VĚTRNÉ'
    img.src = '/img/restaurace.jpg'
    paragraph.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, cumque minima maiores nemo ipsam quibusdam quasi. Deserunt dolorum minima corporis harum aliquam in, nobis reiciendis nulla rem odio et alias.'

    contentDiv.appendChild(heading);
    contentDiv.appendChild(img);
    contentDiv.appendChild(paragraph);
}