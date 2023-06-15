let currPhoto = 0;
let album = [
  {
    photo: './img/colosseum.jpg',
    alternativeText: 'Colosseum',
    title: 'Colosseum',
    hoverTitle: 'Colosseum',
    description: 'Coming soon...'
  },
  {
    photo: './img/lake-garda-sirmione.jpg',
    alternativeText: 'Lake Garda by Sirmione',
    title: 'Lake Garda by Sirmione',
    hoverTitle: 'Lake Garda',
    description: 'I want to swim through the lake...'
  },
  {
    photo: './img/san-candido.webp',
    alternativeText: 'Town of San Candido',
    title: 'San Candido',
    hoverTitle: 'San Candido',
    description: 'One of my favourite Italian TV series is set in here...'
  },
  {
    photo: './img/santa-maria-assunta-cathedral-spoleto.jpeg',
    alternativeText: 'Santa Maria Assunta Cathedral in Spoleto',
    title: 'Santa Maria Assunta Cathedral',
    hoverTitle: 'Spoleto',
    description: 'Don Matteo...'
  },
  {
    photo: './img/stadio-olimpico.jpeg',
    alternativeText: 'Stadio Olimpico football stadium',
    title: 'Stadio Olimpico',
    hoverTitle: 'Stadium',
    description: 'My favourite football team plays their home matches here...'
  },
  {
    photo: './img/trevi-fountain.jpg',
    alternativeText: 'Trevi Fountain in Rome',
    title: 'Trevi Fountain',
    hoverTitle: 'Trevi',
    description: 'You can toss coins into the fountain...'
  },
  {
    photo: './img/venice.jpg',
    alternativeText: 'Landscape of Venice',
    title: 'Venice',
    hoverTitle: 'Venice',
    description: 'You must travel by gondolas...'
  },
]

$('#main-img #photo').attr('src', album[currPhoto].photo).attr('alt', album[currPhoto].alternativeText);
$('#main-img #photo-title').text(album[currPhoto].title);
$('#main-img #photo-description').text(album[currPhoto].description);

$('#prev-btn').click(() => {
  if(currPhoto > 0){
    currPhoto--;
  }else{
    currPhoto = album.length-1;
  }
  loadImg(currPhoto);
});

$('#next-btn').click(() => {
  currPhoto++;
  if(currPhoto >= album.length){
    currPhoto = 0;
  }
  loadImg(currPhoto);
});

album.forEach(function(album, index){
  $('#thumbnail-container').append(`
    <div class="thumbnail">
      <img src="${album.photo}" alt="${album.alternativeText}" data-index="${index}">
      <div class="thumbnail-title">${album.hoverTitle}</div>
    </div>
  `);

  $('#thumbnail-container .thumbnail img').on({
    click: function(){
      let thumbnailURL = $(this).attr('src');

      $('#main-img-container #main-img #photo').finish().fadeOut(1200, function(){
        $(this).attr('src', thumbnailURL);
      }).finish().fadeIn(1200);
    }
  })
});

let loadImg = (imgNum) => {
  $('#main-img #photo').attr('src', album[imgNum].photo).attr('alt', album[imgNum].alternativeText);
  $('#main-img #photo-title').text(album[imgNum].title);
  $('#main-img #photo-description').text(album[imgNum].description);
};