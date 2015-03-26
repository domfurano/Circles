
var RGBA_RE = new RegExp(/\s*rgba\s*\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*,\s*([01]{0,1}.{0,1}\d*)\s*\)\s*/);

function redRGBA(RGBA) {
	return RGBA.match(RGBA_RE)[1];
}

function greenRGBA(RGBA) {
	return RGBA.match(RGBA_RE)[2];
}

function blueRGBA(RGBA) {
	return RGBA.match(RGBA_RE)[3];
}

function alphaRGBA(RGBA) {
	return RGBA.match(RGBA_RE)[4];
}

function randomRGBA(alpha) {
	alpha = typeof alpha !== 'undefined' ? alpha : 1;

	return 'rgba(' + Math.ceil(Math.random() * 255) + ', '
	+ Math.ceil(Math.random() * 255) + ', '
	+ Math.ceil(Math.random() * 255) + ', '
	+ alpha + ')';
}

function randomRGB()
{
	return '#' + ('000000' +  Math.ceil(Math.random() * 0xffffff).toString(16)).slice(-6);
}

function complimentaryRGB(RGB)
{
	return '#' + ('000000' + (0xffffff - parseInt(RGB.substring(1), 16)).toString(16)).slice(-6);
}

function fadeToRGB(current, target)
{
	var currR = parseInt(current.substring(1, 3), 16);
	var currG = parseInt(current.substring(3, 5), 16);
	var currB = parseInt(current.substring(5, 7), 16);

	var targR = parseInt(target.substring(1, 3), 16);
	var targG = parseInt(target.substring(3, 5), 16);
	var targB = parseInt(target.substring(5, 7), 16);

	currR < targR ? currR++ : currR > targR ? currR-- : null;
	currG < targR ? currG++ : currG > targG ? currG-- : null;
	currB < targR ? currB++ : currB > targB ? currB-- : null;

	return '#' + currR.toString(16) + currG.toString(16) + currB.toString(16);
}

function fadeToRGBA(current, target, rate)
{
	var currR = parseInt(redRGBA(current));
	var currG = parseInt(greenRGBA(current));
	var currB = parseInt(blueRGBA(current));
	var currA = alphaRGBA(current);

	var targR = parseInt(redRGBA(target));
	var targG = parseInt(greenRGBA(target));
	var targB = parseInt(blueRGBA(target));

	if (currR < targR) {
		if (targR - currR >= rate) {
			currR += rate;
		} else {
			currR++;
		}
	} else if (currR > targR) {
		if (currR - targR >= rate) {
			currR -= rate;
		} else {
			currR--;
		}
	}

	if (currG < targG) {
		if (targG - currG >= rate) {
			currG += rate;
		} else {
			currG++;
		}
	} else if (currG > targG) {
		if (currG - targG >= rate) {
			currG -= rate;
		} else {
			currG--;
		}
	}

	if (currB < targB) {
		if (targB - currB >= rate) {
			currB += rate;
		} else {
			currB++;
		}
	} else if (currB > targB) {
		if (currB - targB >= rate) {
			currB -= rate;
		} else {
			currB--;
		}
	}

	return 'rgba(' + currR + ', ' + currG + ', ' + currB + ', ' + currA + ')';
}

function toRGBA(RGB, alpha)
{
	return 'rgba(' + parseInt(RGB.substring(1, 3), 16) + ', ' + 
	parseInt(RGB.substring(3, 5), 16) + ', ' + 
	parseInt(RGB.substring(5, 7), 16) + ', ' + alpha + ')';
}

function equalsRGBAnoAlpha(left, right) {
	if (redRGBA(left)   === redRGBA(right)   &&
			greenRGBA(left) === greenRGBA(right) &&
			blueRGBA(left)  === blueRGBA(right)) {
		return true;
	} else {
		return false;
	}
}
