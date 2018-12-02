import Component from '@ember/component';
import { inject as service } from '@ember/service';


export default Component.extend({
    store: service(),
    actions: {
        editProduct() {
            let shop = this.get('store').peekRecord('shop', this.shopId);
            shop.save()
            .then(() => {
                let product = this.get('store').peekRecord('product', this.product.id, {reload:true});
                product.set('shop', shop)
                product.save().then(() => {
                    this.set('showForm', false);
                    
                });
            })
        },
        deleteProduct() {
            let product = this.get('store').peekRecord('product', this.product.id);
            product.destroyRecord();
        }
    }
});
