import Ember from 'ember';

export default Ember.Controller.extend({
  emailAddress: '',
  textMessage: '',
  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),
  actions: {
    sendMessage() {
      alert(`Sending following message from ${this.get('emailAddress')}: "${this.get('textMessage')}"`);
      this.set('responseMessage', "We got your message and we'll get in touch soon");
    }
  }
});
