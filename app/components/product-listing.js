import Component from '@ember/component';
import { inject as service } from '@ember/service';


export default Component.extend({
    store: service(),
    actions: {
        editProduct() {
            this.product.save().then(() => {
                this.set('showForm', false);
            });
        },
        deleteProduct() {
            let product = this.get('store').peekRecord('product', this.product.id);
            product.destroyRecord();
        }
    }
});