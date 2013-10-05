	$(document).ready(function() 
{

		var cardModel= Backbone.Model.extend
		({
			defaults: 
			{
				value: 0, 
				suit: '', 
				str_value: ''
			}

		}); 
		var cardModelView= Backbone.View.extend
		({
			template: _.template($('#card-template').html()), 
			initialize: function ()
			{
				this.render(); 
			}, 
			render:function()
			{
				this.$el.html(this.template(this.model.attributes));
			}

		});

	function convert_value_to_string(value) 
	{
		if (value > 10 || value < 2) 
		{
			switch (value) 
			{
				case 11:
				return 'Jack';
				break;
				case 12:
				return 'Queen';
				break;
				case 13:
				return 'King';
				break;
				case 1:
				return 'Ace';
				break;
			}
		}
		return value.toString();
	}

	var deck = [];
	var suits = ['hearts', 'diamonds', 'spades', 'clubs'];
	for (var i = 0; i<suits.length; i++) 
	{
		var suit = suits[i];
		for (var j = 0; j<13; j++) 
		{
			var cardModelInstance= new cardModel 
			({
				value: j+1, 
				suit: suit, 
				str_value: convert_value_to_string(j+1)
			}); 
			var cardViewInstance= new cardModelView 
			({
				model: cardModel
			});
			cardViewInstance.render();
			deck.push(cardModelInstance);
		};
	};
	var deckShuffle= _.shuffle(deck); 
	console.log(cardModelInstance);

});