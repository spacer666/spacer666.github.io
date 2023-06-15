let currPhoto = 0;
let album = [
  {
    photo: './img/colosseum.jpg',
    alternativeText: 'Colosseum',
    title: 'Colosseum',
    hoverTitle: 'Colosseum',
    description: 'An amphitheatre from the Ancient Rome that is still popular sight of the city. Since the summer of 2010, the underground part of the building is accessible. It has an elliptical arena which was in fact, a Roman invention.'
  },
  {
    photo: './img/lake-garda-sirmione.jpg',
    alternativeText: 'Lake Garda by Sirmione',
    title: 'Lake Garda by Sirmione',
    hoverTitle: 'Lake Garda',
    description: 'Lake Garda is the biggest lake in Italy. Thanks to its location and its really nice climate, this destination attracts many tourists.'
  },
  {
    photo: './img/san-candido.webp',
    alternativeText: 'Town of San Candido',
    title: 'San Candido',
    hoverTitle: 'San Candido',
    description: 'One of my favourite Italian TV series is set in this tiny little town of less than 3.500 inhabitants. It is easy to get there via both public roads and railways.'
  },
  {
    photo: './img/santa-maria-assunta-cathedral-spoleto.jpeg',
    alternativeText: 'Santa Maria Assunta Cathedral in Spoleto',
    title: 'Santa Maria Assunta Cathedral',
    hoverTitle: 'Spoleto',
    description: 'It is the main temple of Siena and was built in a gothic style. Serves as a scene in the TV series Don Matteo.'
  },
  {
    photo: './img/stadio-olimpico.jpeg',
    alternativeText: 'Stadio Olimpico football stadium',
    title: 'Stadio Olimpico',
    hoverTitle: 'Stadium',
    description: 'This is the largest sports facility in Rome, seating over 70.000 spectators and serves as a home stadium for my favourite team, AS Roma and their eternal rival, SS Lazio. Concerts have been hosted for numerous occasions during last decades.'
  },
  {
    photo: './img/trevi-fountain.jpg',
    alternativeText: 'Trevi Fountain in Rome',
    title: 'Trevi Fountain',
    hoverTitle: 'Trevi',
    description: 'One of the most famous fountains in the world. its name derives from trivium (Latin, intersection of three streets) and is located right in the center of Via DeCrocicchi, Via Poli and Via Delle Muratte. Tourists and locals throw coins into the fountain and make wishes.'
  },
  {
    photo: './img/venice.jpg',
    alternativeText: 'Landscape of Venice',
    title: 'Venice',
    hoverTitle: 'Venice',
    description: 'This city is built on more than 100 small islands that are separated by canals and linked together by hundreds of bridges. Lots of tourists visit Venice in order to travel by gondola or to propose in an utterly romantic way.'
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