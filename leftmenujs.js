function print(message) {
    document.write(message);
}

var sidenav = [{ href: 'All', title: 'Designs' },
{ href: 'Kitchen', title: 'Kitchens' }, { href: 'Bathroom', title: 'Bathrooms' },
{ href: 'Bedroom', title: 'Bedrooms' }, { href: 'Livingroom', title: 'Living' }, { href: 'Diningroom', title: 'Dining' }
    , { href: 'Outdoors', title: 'Outdoors' }, { href: 'Pools', title: 'Pools' }, { href: 'Gardens', title: 'Gardens' }
    , { href: 'Facades', title: 'Facades' }, { href: 'Collections', title: 'Collections' }, { href: 'Inspiration', title: 'Inspiration' }
];


function leftMenu(leftnavmenu) {
    var listHtml = '';
    for (var i = 0; i < sidenav.length; i++) {
        listHtml += '<li class ="left-nav-menu><a href=' + sidenav[i].href + '.html">'
            + sidenav[i].title + '</a></li>';
    }

    print(listHtml);
}
leftMenu(sidenav);
