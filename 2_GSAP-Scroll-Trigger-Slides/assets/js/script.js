// Erstellt eine neue Timeline die in der Variable lt gespeichert ist
let timeLineOne = gsap.timeline({
	scrollTrigger: {
		// Neues scrollTrigger Objekt das von der Klasse "container"
		// getriggert wird, ganz am oberen Bilschirmrand startet und responsive da endet
		// wo die letzte Slide sein Ende hat
		trigger: ".containerOne",
		start: "top top",
		end: () => "+=" + document.querySelector(".containerOne").offsetHeight * 4,
		scrub: 1, // Verlangsamt die Animationen jeweils um 1 Sekunde
		pin: true, //  Die Elemente rasten alle nach der Animation an ihrer Position ein und scrollen mit
		//markers: true
	},
});

timeLineOne
	.from(".b", {
		// Das Element mit der Klasse "b" wird auf der x-Achse 100% nach links (minus) verschoben,
		// von dort aus wird es es dann mit einem "ease in" eingescrollt usw. ...
		xPercent: -100,
		ease: "ease in",
	})
	.from(".c", {
		yPercent: -100,
		ease: "ease in",
	})
	.from(".d", {
		xPercent: 100,
		ease: "ease in",
	})
	.from(".e", {
		yPercent: 100,
		ease: "ease in",
	})
	.from(".f", {
		yPercent: -100,
		ease: "ease in",
	})
	.from(".g", {
		xPercent: -100,
		ease: "ease in",
	})
	.from(".h", {
		yPercent: 100,
		ease: "ease in",
	});

// Erstellt eine neue Timeline die in der Variable lt gespeichert ist
let timeLineTwo = gsap.timeline({
	scrollTrigger: {
		// Neues scrollTrigger Objekt das von der Klasse "container"
		// getriggert wird, ganz am oberen Bilschirmrand startet und responsive da endet
		// wo die letzte Slide sein Ende hat
		trigger: ".containerTwo",
		start: "top top",
		end: () => "+=" + document.querySelector(".containerTwo").offsetHeight * 4,
		scrub: 1, // Verlangsamt die Animationen jeweils um 1 Sekunde
		pin: true, //  Die Elemente rasten alle nach der Animation an ihrer Position ein und scrollen mit
		//markers: true
	},
});

timeLineTwo
	.from(".j", {
		xPercent: -100,
		ease: "ease in",
	})
	.from(".k", {
		yPercent: -100,
		ease: "ease in",
	})
	.from(".l", {
		xPercent: 100,
		ease: "ease in",
	})
	.from(".m", {
		yPercent: 100,
		ease: "ease in",
	})
	.from(".n", {
		yPercent: -100,
		ease: "ease in",
	})
	.from(".o", {
		xPercent: -100,
		ease: "ease in",
	})
	.from(".p", {
		yPercent: 100,
		ease: "ease in",
	});
