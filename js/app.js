$.ajax('../data/page-1.json')
    .then( data => {
        data.forEach(animal => {
            let $imgTemplate = $('img:last-of-type');
            let $newImage = $imgTemplate.clone();
            $newImage.attr('src', `${animal.image_url}`);
            $newImage.attr('alt', `${animal.keyword}`);
            // $('#photo-template').append(`<h2> ${animal.title} </h2>`);
            $('#photo-template').append($newImage);

            $newImage.removeAttr('class');

            $('.img').remove();

        })
    });


$.ajax('../data/page-1.json')
    .then( data => {
        data.forEach(animal => {
            let $option = $('option:last-of-type');
            let $newOption = $option.clone();

            $newOption.attr('value', `${animal.keyword}`);
            $newOption.text(`${animal.keyword}`);

            $('.filter').append($newOption);
        })
    })


$('.filter').on('click', function() {
    let value = this.value;

    let $allImagesValue = $('img');

    for(let i = 0; i < $allImagesValue.length; i ++ ) {
        if($allImagesValue[i].alt !== value) {
            $($allImagesValue[i]).hide();
        } else if( $allImagesValue[i].alt === value) {
            $($allImagesValue[i]).show();
        }
    }
})

