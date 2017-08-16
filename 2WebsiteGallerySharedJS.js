


function images(galleryInterior, type) {
    for (var i = 0; i < galleryInterior.length; i++) {
        var path = '<div class="interior-img-block"><img class="interior-image" src="site/img/' + type +
            galleryInterior[i].number +
            '.jpg" alt="' + type +  ' photo"><div class="hidden-text"><input class="add-to-favorite" type="submit" value="Add to favorite">'
            + galleryInterior[i].text + '</div></div>';
        document.write(path);
    }
}
