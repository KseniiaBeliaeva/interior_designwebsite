function print(message) {
    document.write(message);
}

var sidenav = [
{ href: 'all', title: 'Designs' },
{ href: 'kitchen', title: 'Kitchens' },
{ href: 'bathroom', title: 'Bathrooms' },
{ href: 'bedroom', title: 'Bedrooms' },
{ href: 'livingroom', title: 'Living' },
{ href: 'diningroom', title: 'Dining' },
{ href: 'outdoors', title: 'Outdoors' },
{ href: 'pools', title: 'Pools' },
{ href: 'gardens', title: 'Gardens' },
{ href: 'facades', title: 'Facades' },
{ href: 'collections', title: 'Collections' },
{ href: 'inspiration', title: 'Inspiration' }
];


function leftMenu(leftnavmenu) {
    var listHtml = '';
    for (let i = 0; i < sidenav.length; i++) {
        listHtml += '<li class ="left-nav-menu"><a href=' + sidenav[i].href + '.html">'
            + sidenav[i].title + '</a></li>';
    }

    print(listHtml);
}
leftMenu(sidenav);
