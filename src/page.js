
function selectTab(tabName) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        if (tab.id == tabName) {
            tab.classList.add('current');
        } else {
            tab.classList.remove('current');
        }
    });
}

function infoCards() {
    const reviewCard = document.createElement('div');
    reviewCard.classList.add('card');
    const review = document.createElement('p');
    review.id = 'review';
    review.textContent = 'The Center for Community is by far one of the worst places I have ever eaten. It should be a crime that all those poor trust fund baby students should be forced to eat at such a wretched dining hall. The government and I would be thrilled to do absolutely nothing about this.';
    reviewCard.appendChild(review);
    const reviewAuthor = document.createElement('p');
    reviewAuthor.id = 'review-author';
    reviewAuthor.textContent = '~Obama';
    reviewCard.appendChild(reviewAuthor);

    const hoursCard = document.createElement('div');
    hoursCard.classList.add('card');
    const hoursTitle = document.createElement('h2');
    hoursTitle.classList.add('card-title');
    hoursTitle.textContent = 'Hours';
    hoursCard.appendChild(hoursTitle);
    const schedule = document.createElement('ul');
    schedule.id = 'schedule';
    const sundayHours = document.createElement('li');
    sundayHours.classList.add('schedule-item');
    sundayHours.textContent = 'Sunday: 8am - 8pm';
    schedule.appendChild(sundayHours);
    const mondayHours = document.createElement('li');
    mondayHours.classList.add('schedule-item');
    mondayHours.textContent = 'Monday: 8am - 8pm';
    schedule.appendChild(mondayHours);
    const tuesdayHours = document.createElement('li');
    tuesdayHours.classList.add('schedule-item');
    tuesdayHours.textContent = 'Tuesday: 8am - 8pm';
    schedule.appendChild(tuesdayHours);
    const wednesdayHours = document.createElement('li');
    wednesdayHours.classList.add('schedule-item');
    wednesdayHours.textContent = 'Wednesday: 8am - 8pm';
    schedule.appendChild(wednesdayHours);
    const thursdayHours = document.createElement('li');
    thursdayHours.classList.add('schedule-item');
    thursdayHours.textContent = 'Thursday: 8am - 8pm';
    schedule.appendChild(thursdayHours);
    const fridayHours = document.createElement('li');
    fridayHours.classList.add('schedule-item');
    fridayHours.textContent = 'Friday: 8am - 8pm';
    schedule.appendChild(fridayHours);
    const saturdayHours = document.createElement('li');
    saturdayHours.classList.add('schedule-item');
    saturdayHours.textContent = 'Saturday: 8am - 8pm';
    schedule.appendChild(saturdayHours);
    hoursCard.appendChild(schedule);

    const locationCard = document.createElement('div');
    locationCard.classList.add('card');
    const locationTitle = document.createElement('h2');
    locationTitle.classList.add('card-title');
    locationTitle.textContent = 'Location';
    locationCard.appendChild(locationTitle);
    const address = document.createElement('p');
    address.id = 'address';
    address.textContent = 'Boulder, CO';
    locationCard.appendChild(address);

    return [reviewCard, hoursCard, locationCard];
}

function menuCards() {
    const appsCard = document.createElement('div');
    appsCard.classList.add('card');
    const appsTitle = document.createElement('h2');
    appsTitle.classList.add('card-title');
    appsTitle.textContent = 'Appetizers';
    appsCard.appendChild(appsTitle);
    const appsList = document.createElement('ul');
    const apps = ['Calamari', 'Chicken fingers', 'Shrimp', 'Nachos']
    apps.forEach(app => {
        const appItem = document.createElement('li');
        appItem.textContent = app;
        appsList.appendChild(appItem);
    });
    appsCard.appendChild(appsList);

    const entreeCard = document.createElement('div');
    entreeCard.classList.add('card');
    const entreeTitle = document.createElement('h2');
    entreeTitle.classList.add('card-title');
    entreeTitle.textContent = 'Entrees';
    entreeCard.appendChild(entreeTitle);
    const entreeList = document.createElement('ul');
    const entrees = ['Filet Minon', 'Chicken breast', 'Lobster', 'Salmon']
    entrees.forEach(entree => {
        const entreeItem = document.createElement('li');
        entreeItem.textContent = entree;
        entreeList.appendChild(entreeItem);
    });
    entreeCard.appendChild(entreeList);

    const dessertCard = document.createElement('div');
    dessertCard.classList.add('card');
    const dessertTitle = document.createElement('h2');
    dessertTitle.classList.add('card-title');
    dessertTitle.textContent = 'Desserts';
    dessertCard.appendChild(dessertTitle);
    const dessertList = document.createElement('ul');
    const desserts = ['Ice cream', 'Apple pie', 'Brownie'];
    desserts.forEach(dessert => {
        const dessertItem = document.createElement('li');
        dessertItem.textContent = dessert;
        dessertList.appendChild(dessertItem);
    });
    dessertCard.appendChild(dessertList);

    return [appsCard, entreeCard, dessertCard];
}

function homeContent() {
    const content = document.createElement('div');
    const title = document.createElement('h1');
    title.classList.add('page-title');
    title.textContent = 'Center 4 Community: Dining Hall';
    content.appendChild(title);

    const cards = infoCards();
    cards.forEach(card => {
        content.appendChild(card);
    });

    return content.innerHTML;
}

function menuContent() {
    const content = document.createElement('div');
    const title = document.createElement('h1');
    title.classList.add('page-title');
    title.textContent = 'Menu';
    content.appendChild(title);

    const cards = menuCards();
    cards.forEach(card => {
        content.appendChild(card);
    });

    return content.innerHTML;
}

function contactContent() {
    const content = document.createElement('div');
    const title = document.createElement('h1');
    title.classList.add('page-title');
    title.textContent = 'Contact';
    content.appendChild(title);

    const contactCard = document.createElement('div');
    contactCard.classList.add('card');
    contactCard.textContent = 'lazy >:<';
    content.appendChild(contactCard)

    return content.innerHTML;
}

const page = (() => {
    let content = document.querySelector('#content');
    const home = () => {
        content.innerHTML = homeContent();
        selectTab('home-tab');
    };
    const menu = () => {
        content.innerHTML = menuContent();
        selectTab('menu-tab');
    };
    const contact = () => {
        content.innerHTML = contactContent();
        selectTab('contact-tab');
    };

    return {home, menu, contact}
})();

export default page;
