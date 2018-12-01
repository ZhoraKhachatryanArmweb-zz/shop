import Controller from '@ember/controller';

export default Controller.extend({
    newName: '',
    actions: {
        createBand() {
          let name = this.get('newName');
          if (!name) { return; }
          this.set('isSaving', true);
          this.store.createRecord('shop', { name: this.get('newName') })
            .save()
            .then(() => this.set('newName', ''))
            .finally(() => this.set('isSaving', false));
        }
    }
});
