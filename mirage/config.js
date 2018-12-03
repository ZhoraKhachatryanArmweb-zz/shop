export default function() {

  this.namespace = '/api';
  this.get('/shops');
  this.post('/shops');
  this.get('/shops/:id');
  this.del('/shops/:id');
  this.put('/shops/:id');
  this.patch('/shops/:id');
  this.get('/products');
  this.post('/products', function({ products }) {
      return products.create();
  });
  this.get('/products/:id');
  this.del('/products/:id');
  this.put('/products/:id');
  this.patch('/products/:id', function({ products }, request) {
    let id = request.params.id;

    return products.find(id).update();
  });
}