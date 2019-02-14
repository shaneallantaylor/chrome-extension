chrome.extension.sendMessage({}, function (response) {
	var readyStateCheckInterval = setInterval(function () {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);

			var myAudio = new Audio(chrome.runtime.getURL("assets/meditation.m4a"));

			let quotes = {
				"Will": "Before your close your eyes every night, take three deep breaths in gratitude for another day closer to graduation.",
				"Sam G.": "Each and every one of you are champions for working this hard at this hour.",
				"Schno": 'Get at least 3 hours of sleep.',
				"Sam S.": "Practice love. Close your eyes and think of a dear one. Wish them everything you lack: sleep, joy, freedom.",
				"Ryan": "Focus on Codesmith. If you have a thought about anything else, consider taking a moment to stop, label the thought as unhelpful and let go of the negativity."
			}

			function rando(obj) {
				let names = Object.keys(obj);
				let num = Math.floor(Math.random() * names.length);
				return names[num];
			}

			let chosenKey = rando(quotes);

			// splash
			let splash = document.createElement("div");
			splash.setAttribute("id", "codesanity");
			// splash.classList.add('on');
			document.body.appendChild(splash);
			document.body.classList.add('splash');

			// main (quote container)
			let main = document.createElement("main");
			main.setAttribute("id", "quote-container");
			document.getElementById('codesanity').appendChild(main);

			// blockquote
			let bq = document.createElement("blockquote");
			bq.innerHTML = quotes[chosenKey];
			bq.classList.add('cs-bq');
			document.getElementById('quote-container').appendChild(bq);


			// photo div
			let cleanCite = chosenKey.replace(/([\s.])+/g, '').toLowerCase();
			let photoDiv = document.createElement('div');
			photoDiv.classList.add('photo');
			photoDiv.classList.add(cleanCite);
			document.getElementById('quote-container').appendChild(photoDiv);

			// cite 
			let cite = document.createElement("cite");
			cite.innerHTML = chosenKey;
			document.getElementById('quote-container').appendChild(cite);



			// // countdown
			// let countDown = document.createElement("div");
			// countDown.setAttribute("id", "countdown");
			// document.getElementById('codesanity').appendChild(countDown);

			// // minutes
			// let minutesContainer = document.createElement("div");
			// minutesContainer.classList.add('minutes');
			// document.getElementById('countdown').appendChild(minutesContainer);

			// // seconds 
			// let secondsContainer = document.createElement("div");
			// secondsContainer.classList.add('seconds');
			// document.getElementById('countdown').appendChild(secondsContainer);

			// ----------------------------------------------------------
			// This part of the script triggers when page is done loading
			console.log("Hello. This message was sent from scripts/inject.js");
			// ----------------------------------------------------------
			document.addEventListener("keypress", function (event) {
				if (event.keyCode == 27 || event.keyCode === 32) {
					myAudio.play();
				}
			})
			window.setTimeout(function () { document.getElementById('codesanity').classList.add('on') }, 1000);
			setTimeout(function () { document.getElementById('codesanity').remove() }, 60000)
		}

	}, 4000);
});