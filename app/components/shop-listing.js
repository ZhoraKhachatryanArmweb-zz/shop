import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    store: service(),
    actions: {
        editShop() {
            let shop = this.store.peekRecord('shop', this.shop.id);
            shop.save().then(() => {
                this.set('showForm', false);
            });
        },
        deleteShop() {
            let shop = this.get('store').peekRecord('shop', this.shop.id);
            shop.destroyRecord()
        }
    }
});
