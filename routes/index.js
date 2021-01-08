
/*
 * GET home page.
 */

exports.view = function(req, res){
  res.render('index', {
    "projects":[
      {
        "name": "Waiting in line",
        "image": "lorempixel.people.1.jpeg",
        "id": "1"
      },
      {
        'name': 'Needfinding',
        'image': 'lorempixel.city.1.jpeg',
        'id': '2'
      },
      {
        'name': 'Prototyping',
        'image': 'lorempixel.technics.1.jpeg',
        'id': '3'
      },
      {
        'name': 'Heuristic Evaluation',
        'image': 'lorempixel.abstract.1.jpeg',
        'id': '4'
      },
      {
        'name': 'Visualization',
        'image': 'lorempixel.abstract.8.jpeg',
        'id': '5'
      },
      {
        'name': 'Social design',
        'image': 'lorempixel.people.2.jpeg',
        'id': '6'
      },
      {
        'name': 'Gestural interaction',
        'image': 'lorempixel.technics.2.jpeg',
        'id': '7'
      },
      {
        'name': 'Design tools',
        'image': 'lorempixel.city.2.jpeg',
        'id': '8'
      },

        
    ]
  });
};