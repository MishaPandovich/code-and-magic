'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
/*размеры прямоугольников*/
var RECT_WIDTH = 40;
var RECT_HEIGHT = 150;
/*координаты прямоугольников*/
var RECT_PADDING_LEFT = 140;
var RECT_PADDING_TOP = 90;
var RECT_PADDING_BOTTOM = CLOUD_HEIGHT - RECT_HEIGHT - RECT_PADDING_TOP; /*30*/
/*отступ прямоугольников по ширине*/
var GAP = 50;
var RECT_WIDTH_GAP = RECT_WIDTH + GAP;
/*максимальная высота прямоугольников*/
var RECT_MAX_HEIGHT = CLOUD_HEIGHT - RECT_PADDING_TOP - RECT_PADDING_BOTTOM;

/*функция отрисовки фонового блока*/
var renderCloud = function(ctx, x, y, color) {
	ctx.fillStyle = color;
  	ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

/*поиск самого лучшего результата*/
var getMaxTime = function(arr) {
	var maxElement = arr[0];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > maxElement) {
		  maxElement = arr[i];
		}
	}
  	return maxElement;
};

window.renderStatistics = function(ctx, players, times) {
	/**/
	renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.3)');
	renderCloud(ctx, 100, 10, '#ffffff');
	/**/
	ctx.font = '16px PT Mono';
	ctx.fillStyle = '#000';
	ctx.textBaseline = 'hanging';
	ctx.fillText('Ура вы победили!', 140, 25);
	ctx.fillText('Список результатов:', 140, 45);

	var maxTime = getMaxTime(times);
	/*идет отрисовка результатов игроков*/
	for (var i = 0; i <= players.length-1; i++) {
		// вычисление высоты прямоугольника по результатам игры
    var RectHeightProportion = Math.round((RECT_HEIGHT * times[i]) / maxTime);
    var colorSat = Math.random() * (1 - 0.2) + 0.2;

    // вывод подписей у гистограммы
		ctx.fillStyle = '#000';
	  ctx.fillText(players[i], RECT_PADDING_LEFT  + (RECT_WIDTH_GAP * i), 250);
	  ctx.fillText(Math.round(times[i]), RECT_PADDING_LEFT + ((RECT_WIDTH + GAP) * i), ((RECT_HEIGHT - RectHeightProportion) + RECT_PADDING_TOP) - 20);

	  (players[i] === 'Вы') ? ctx.fillStyle = 'rgba(255, 0, 0, 1)' : ctx.fillStyle = 'rgba(' + 0 + ', ' + 0 + ', ' + 255 + ', ' + colorSat + ')';
	  ctx.fillRect(RECT_PADDING_LEFT  + (RECT_WIDTH_GAP * i), (RECT_HEIGHT - RectHeightProportion) + RECT_PADDING_TOP, 40, RectHeightProportion);
	}
}

