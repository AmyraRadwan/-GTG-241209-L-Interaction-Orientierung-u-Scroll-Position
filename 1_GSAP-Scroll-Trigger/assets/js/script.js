// Starte eine neue GSAP Animation für das Element mit der Klasse .a
gsap.to(".a", {
	scrollTrigger: {
		trigger: ".a", // Der Trigger ist das Element das die Animation auslöst
		start: "0 50%", // Gibt die Scroll-Position an bei der die Animation anfängt (1. Wert: abhängig von Elementposition auf der Seite / 2. Wert: abhängig von Bildschirmhöhe)
		end: "10px 10%", // Gibt die Scroll-Position an bei der die Animation aufhört
		scrub: true, // Die Animation wird von der Scroll-Bar gesteuert
		pin: false, // Das Element rastet beim Start der Animation ein (fixed) und scrollt mit
		markers: true, // Zeigen die Scroll-Start und -End Positionen visuell an
	},
	y: 300, // Das Element wird 300px auf der y-Achse nach rechts verschoben
	rotation: 180, // Rotiert einmal um 180 Grad
});

gsap.to(".b", {
	scrollTrigger: {
		trigger: ".b",
		start: "top center",
		end: "bottom 200px",
		scrub: false,
		pin: false,
		markers: false,
		toggleActions: "restart pause reverse pause", // Gibt an das es neu startet sobald es wieder zu sehen ist, pausiert wenn es aus dem Blickfeld verschwindet, rückwärts animiert wenn es von unten wieder hochgescrollt wird und pausiert wenn wieder ganz nach oben gescrollt wird.
	},
	x: 600, // Das Element wird 600px auf der x-Achse nach rechts verschoben
	rotation: 360, // Rotiert einmal um 360 Grad
	duration: 2, // Die Dauer der Animation
});

gsap.to(".c", {
	scrollTrigger: {
		trigger: ".c",
		start: "100px 80%",
		end: "+=300",
		scrub: 1, // Die Scroll-Bar wird um eine Sekunde verzögert
		pin: true,
		markers: false,
	},
	x: 600,
});
