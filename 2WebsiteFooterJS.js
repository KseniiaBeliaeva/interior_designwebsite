
var footerlink1 = [{ link: 'design-milk.com/category/architecture/', description: 'Design milk' }, {
    link: 'www.houzz.co.uk/',
    description: 'Houzz'}, { link: 'www.housebeautiful.com/design-inspiration/', description: 'Housebeautiful' }, {
    link: 'www.brightbazaarblog.com/',
    description: 'bright.bazaar'}, { link: 'www.homeshoppingspy.com/', description: 'HomeShoppingSpy' },
{ link: 'www.roomenvy.co.uk/', description: 'RoomEnvy' }];

var footerlink2 = [{ link: 'All', description: 'Designs' },
{ link: 'Kitchen', description: 'Kitchens' }, { link: 'Bathroom', description: 'Bathrooms' },
{ link: 'Bedroom', description: 'Bedrooms' }, { link: 'Livingroom', description: 'Living' }];

function footer(footermenu) {
    var footerlinks = '';
    footerlinks = ' <ul class="footer-menu-bar">'
    for (var i = 0; i < footermenu.length; i++) {
        footerlinks += '<li><a href="http://' + footermenu[i].link + '">' + footermenu[i].description +
            '</a></li>';
    }
    footerlinks += '</ul>';
    document.write(footerlinks);
}

footer(footerlink1);
footer(footerlink2);