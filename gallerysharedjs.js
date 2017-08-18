function images(galleryInterior, type) {
    for (var i = 0; i < galleryInterior.length; i++) {
        var path = '<div class="interior-img-block"><img class="interior-image" src="img/' + type +
            galleryInterior[i].number +
            '.jpg" alt="' + type +  ' photo"><div class="hidden-text"><p>Aenean maximus, mauris ut feugiat lacinia</p><button class="add-to-favorite" value="Add to favorite">Add to favorite</button>'
            + '</div></div>';
        document.write(path);
    }
}
