let qrcodelink = select('a');
let qrcode = select('img');
let qrtext = select('textarea');
let qrbtn = select('#btnGenerate');

//On page load, put a default qr code
window.addEventListener('load', generateQR);

qrbtn.addEventListener('click', generateQR);

qrDownloadBtn.addEventListener('click', downloadQR);

function generateQR() {
	let size = '1000x1000';
	let data = qrtext.value;
	let baseURL = 'http://api.qrserver.com/v1/create-qr-code/';

	//Default qr code
	if (data == '') {
		data = 'You got this! Now put your own text here.';
	}

	let url = `${baseURL}?data=${data}&size=${size}`;

	qrcode.src = url;

	//set the href of image to be the image
	document.getElementById('DownloadImage').href = qrcode.src;
	document.getElementsByTagName('a').href = qrcode.src;
}
function select(el) {
	return document.querySelector(el);
}
