  	let down;
  	let keys = document.querySelectorAll('.piano-key');
  	keys.forEach((item) => item.addEventListener('click', function() {playNote(item.getAttribute('data-key'), item)}, false) )
  	keys.forEach((item) => item.addEventListener('mouseover', function() {playNoteOnHover(item.getAttribute('data-key'), item)}, false) )

  	function playNoteOnHover(letter, item) {
  		if (down) {
  			playNote(letter, item);
  		}
  	}
  	function playNote(letter, item) {
		let letters = ['c','d','e','f','g','a','b','c#','d#','f#','g#','a#'];
		let keys = [68,70,71,72,74,75,76,82,84,85,73,79];
  		if (keys.includes(Number(letter))) {
  			let audio = new Audio(`assets/audio/${letter}.mp3`);
  			audio.play();
  			item.classList.add('element-active');
  			setTimeout(function(){
  				item.classList.remove('element-active');
  			},200)
  		}
	 		
  	}


  	document.addEventListener('keyup', function(e){
  		let keys = [68,70,71,72,74,75,76,82,84,85,73,79];
  		if (keys.includes(e.keyCode)) {
  			let audio = new Audio(`assets/audio/${e.keyCode}.mp3`);
  			let elements = document.querySelectorAll('.piano-key');
  			let item;
  			for (var i = 0; i < elements.length; i++) {
  				if (elements[i].getAttribute('data-key') == e.keyCode) {
  					item = elements[i]					
  				}
  			}
  			item.classList.add('element-active');
  			setTimeout(function(){
  				item.classList.remove('element-active');
  			}, 200)   			
  			audio.play();
  		}
	}) 

  	document.getElementById('screenToggle').addEventListener('click', function(){
		if (document.fullscreenElement || document.webkitFullscreenElement) {
			document.exitFullscreen();
		}
		else{
			document.getElementById('body').requestFullscreen();
		}  		
  	})

  	document.getElementById('piano').addEventListener('mousedown', function(){
  		down = true;
  	})

  	document.getElementById('body').addEventListener('mouseup', function(){
  		down = false; 
  	})

  	document.getElementById('btn-notes').addEventListener('click', function(){
  		let btnNotes = document.getElementById('btn-notes');
  		let btnLetters = document.getElementById('btn-letters');
  		if (!(btnNotes.classList.contains == 'btn-active')) {
  			btnNotes.classList.add('btn-active');
  			btnLetters.classList.remove('btn-active');
  		}

 		let mainElements = document.querySelectorAll('.piano-key__main');
  		let sharpElements = document.querySelectorAll('.piano-key__sharp');
  		mainElements.forEach((item) => {item.children[0].textContent = item.getAttribute('data-note') })
  		sharpElements.forEach((item) => {item.children[0].textContent = item.getAttribute('data-note') })
  	})

  	document.getElementById('btn-letters').addEventListener('click', function(){
  		let btnNotes = document.getElementById('btn-notes');
  		let btnLetters = document.getElementById('btn-letters');
  		if (!(btnLetters.classList.contains == 'btn-active')) {
  			btnLetters.classList.add('btn-active');
  			btnNotes.classList.remove('btn-active');
  		}
  		let mainElements = document.querySelectorAll('.piano-key__main');
  		let sharpElements = document.querySelectorAll('.piano-key__sharp');
  		mainElements.forEach((item) => {item.children[0].textContent = item.getAttribute('data-letter') })
  		sharpElements.forEach((item) => {item.children[0].textContent = item.getAttribute('data-letter') })
  	})