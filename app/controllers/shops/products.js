import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        createProduct() {
            let newProduct = this.get('store').createRecord('product', {
                name: this.newName,
                qty: this.qty,
                price: this.price,
                shop: this.model
            });
            newProduct.save()
            .then(() => {
                this.get('model.products').pushObject(newProduct);
                this.set('newName', '');
                this.set('qty', 0);
                this.set('price', 0);
                this.set('showForm', false)
            });
        }
    }
});