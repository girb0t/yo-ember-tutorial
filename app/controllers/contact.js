import Ember from 'ember';

export default Ember.Controller.extend({
  emailAddress: '',
  textMessage: '',
  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),
  actions: {
    sendMessage() {
      const email = this.get('emailAddress');
      const messageText = this.get('textMessage');
      const newMessage = this.store.createRecord('contact', { email, message: messageText});
      newMessage.save().then((response) => {
        this.set('emailAddress', '');
        this.set('textMessage', '');
        alert(`Message saved with id: ${response.get('id')}`);
      });
    }
  }
});
