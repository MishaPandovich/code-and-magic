'use strict';

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

/*4-ое задание
Окно.setup должно открываться по нажатию на блок.setup-open.
Открытие окна производится удалением класса hidden у блока*/
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

/*Если фокус находится на форме ввода имени, то окно закрываться не должно.*/
var buttonFocus = document.querySelector('.setup-user-name');
var onPopupEscPress = function(evt) {
	if (setupUserName === document.activeElement) {
		return evt;
	} else {
	  if (evt.keyCode === ESC_KEYCODE) {
	    closePopup();
	  }
	}
};

var openPopup = function() {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function() {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function() {
	openPopup();
});

setupOpen.addEventListener('keydown', function(evt) {
	if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function() {
	closePopup();
});

setupClose.addEventListener('keydown', function(evt) {
	if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

/*Изменение цвета мантии персонажа по нажатию*/
var wizardColorCoat = document.querySelector('.setup-wizard .wizard-coat');
wizardColorCoat.style.fill = getRandom(COAT_COLOR);
/*Изменение цвета глаз персонажа по нажатию*/
var wizardColorEyes = document.querySelector('.setup-wizard .wizard-eyes');
wizardColorEyes.style.fill = getRandom(EYES_COLOR);

var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
/*Изменение цвета фаерболов по нажатию*/
var wizardColorFireball = document.querySelector('.setup-fireball-wrap');
wizardColorFireball.style.backgroundColor = getRandom(FIREBALL_COLOR);
