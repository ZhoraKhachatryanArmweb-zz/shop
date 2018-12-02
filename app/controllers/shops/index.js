import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        createShop(name) {
            let newShop = this.get('store').createRecord('shop', {
                name: name
            });
            newShop.save()
        }
    }
});
