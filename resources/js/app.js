let previousButton = document.querySelector('.main__prev-btn');
let nextButton = document.querySelector('.main__next-btn');
let quoteParagraph = document.querySelector('.main__quote p');
let personName = document.querySelector('.main__person-name');
let personPosition = document.querySelector('.main__person-position');
let personPicture = document.querySelector('.main__person-picture');
let background = document.querySelector('.main__bg');
let textDiv = document.querySelector('.main__text');
let person = 'Tanya';


let persons = {
    'Tanya': {
        'quote': '“ I’ve been interested in coding for a while but never taken the jump, until now.' +
            ' I couldn’t recommend this course enough. I’m now in the job of my dreams and so ' +
            'excited about the future. ”',
        'name': 'Tanya Sinclair',
        'position': 'UX Engineer',
        'picture': 'resources/images/image-tanya.jpg',
        'alt': 'Tanya Sinclair picture'
    },
    'John': {
        'quote': '“ If you want to lay the best foundation possible I’d recommend taking this course.' +
            ' The depth the instructors go into is incredible. I now feel so confident about ' +
            'starting up as a professional developer. ”',
        'name': 'John Tarkpor',
        'position': 'Junior Front-end Developer',
        'picture': 'resources/images/image-john.jpg',
        'alt': 'John Tarkpor picture'
    },
};

function changeValues(userName) {
    quoteParagraph.innerText = persons[userName]['quote'];
    personName.innerText = persons[userName]['name'];
    personPosition.innerText = persons[userName]['position'];
    personPicture.setAttribute('src', persons[userName]['picture']);
    personPicture.setAttribute('alt', persons[userName]['alt'])
}

function buttonClick() {
    if (person == 'Tanya') {
        person = 'John';
        changeValues(person);
    } else {
        person = 'Tanya';
        changeValues(person);
    }
}

function animation() {
    background.className = 'main__bg';
    textDiv.className = 'main__text';
    window.requestAnimationFrame(function (time) {
        window.requestAnimationFrame(function (time) {
            background.className = 'main__bg changeUserAnimation';
            textDiv.className = 'main__text changeUserAnimation';
        });
    });
}
previousButton.addEventListener('click', () => {
    buttonClick();
    animation();
})

nextButton.addEventListener('click', () => {
    buttonClick();
    animation();
})

document.addEventListener('keydown', (e) => {
    if (e.key == 'ArrowRight' || e.key == 'ArrowLeft') {
        buttonClick();
        animation();
    }
})