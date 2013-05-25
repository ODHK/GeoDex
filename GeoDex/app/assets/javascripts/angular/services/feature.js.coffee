App.factory 'Feature', ['$resource', ($resource) ->
  $resource '/features/:id', id: '@id'
]