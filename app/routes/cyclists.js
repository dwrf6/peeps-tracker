import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return [
		'Eddy Merckx', 
		'Gary Fisher',
		'Greg LeMond', 
		'Tullio Campagnolo', 
		'Fausto Coppi'
		];
	}
});
