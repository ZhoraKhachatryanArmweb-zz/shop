import Route from '@ember/routing/route';

export default Route.extend({
    model(params){
        return this.get('store').findRecord('shop', params.shop_id, {include: 'products'})
        .then((response) => {
            this.set('products', response.products)
            debugger
        });
    },
    setupController: function(controller, model) {
        debugger
        this._super(controller, model);
        controller.set('products', this.products);
    }
});
