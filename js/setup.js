'use strict';
/*показываю блок с игроками*/
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
/*данные по волшебниками*/
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_FAMILY = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

function getRandom(arr) {
	var index = Math.floor(Math.random() * arr.length);
	return arr[index];
}

var wizards = [
	{
		name: getRandom(WIZARD_NAMES),
		family: getRandom(WIZARD_FAMILY),
		coatColor: getRandom(COAT_COLOR),
		eyesColor: getRandom(EYES_COLOR)
	},
	{
		name: getRandom(WIZARD_NAMES),
		family: getRandom(WIZARD_FAMILY),
		coatColor: getRandom(COAT_COLOR),
		eyesColor: getRandom(EYES_COLOR)
	},
	{
		name: getRandom(WIZARD_NAMES),
		family: getRandom(WIZARD_FAMILY),
		coatColor: getRandom(COAT_COLOR),
		eyesColor: getRandom(EYES_COLOR)
	},
	{
		name: getRandom(WIZARD_NAMES),
		family: getRandom(WIZARD_FAMILY),
		coatColor: getRandom(COAT_COLOR),
		eyesColor: getRandom(EYES_COLOR)
	}
];

/*шаблон*/
var templateWizard = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
/*создаем волшебников по шаблону*/
var createWizard = function(wizards) {
	var wizardElement = templateWizard.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizards.name + ' ' + wizards.family;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards.eyesColor;

  return wizardElement;
}

/*создаем фрагмент*/
var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(createWizard(wizards[i]));
}

/*поиск род элемента в который будут вставляться все волшебника*/
var parentWizardElement = document.querySelector('.setup-similar-list');
parentWizardElement.appendChild(fragment);

/*показ блока*/
document.querySelector('.setup-similar').classList.remove('hidden');


