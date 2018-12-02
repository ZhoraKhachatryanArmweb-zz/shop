import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        createProduct() {
            let newProduct = this.get('store').createRecord('product', {
                name: this.newName,
                qty: this.qty,
                price: this.price
            });
            newProduct.save()
            .then(() => {
                this.get('model.products').pushObject(newProduct);
                this.set('newName', '');
                this.set('qty', 0);
                this.set('price', 0);
                let shop = this.get('store').peekRecord('shop', this.model.id);
                shop.save()
            });
        }
    }
});
