import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return this.store.findAll('shop');
    },
    // actions: {
    //     createBand() {
    //       let controller = this.get('controller');
    //       let shop = this.store.createRecord('shop', {
    //         name: controller.get('newName')
    //       });
    //       return shop.save().then(function() {
    //         controller.set('newName', '');
    //       });
    //     }
    // }
});
