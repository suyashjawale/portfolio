import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
	selector: 'app-s-sidebar',
	imports: [RouterLink, RouterLinkActive],
	templateUrl: './s-sidebar.html',
	styleUrl: './s-sidebar.scss',
})

export class SSidebar {
	isFullScreen = signal(false);
	currentHighlight = signal(0);
	isOpen = signal(false);
	highLights: string[] = [
		"🎉 🥳 Happy Birthday Rushikesh",
		"🎉 🥳 Happy Birthday Trisha",
		"🎉 🥳 Happy Birthday Kashish",
		"Mercury rise and set in Pune Fairly close to the Sun. Visible only before sunrise and/or after sunset."
	]

	toggleFullScreen() {
		const element: any = document.documentElement;
		if (this.isFullScreen()) {
			if (document.exitFullscreen) {
				document.exitFullscreen();
			} else if ((document as any).mozCancelFullScreen) { // Firefox
				(document as any).mozCancelFullScreen();
			} else if ((document as any).webkitExitFullscreen) { // Chrome, Safari and Opera
				(document as any).webkitExitFullscreen();
			} else if ((document as any).msExitFullscreen) { // IE/Edge
				(document as any).msExitFullscreen();
			}
			this.isFullScreen.set(false);
		} else {
			if (element.requestFullscreen) {
				element.requestFullscreen();
			} else if (element.mozRequestFullScreen) { // Firefox
				element.mozRequestFullScreen();
			} else if (element.webkitRequestFullscreen) { // Chrome, Safari and Opera
				element.webkitRequestFullscreen();
			} else if (element.msRequestFullscreen) { // IE/Edge
				element.msRequestFullscreen();
			}
			this.isFullScreen.set(true);
		}
	}

	animationDone() {
		// The animation has completed, so we advance to the next highlight
		this.currentHighlight.update(val => (val + 1) % this.highLights.length);
		this.isOpen.set(false);
		// Toggle isOpen to restart the animation for the next highlight
		setTimeout(() => {
			this.isOpen.set(true);
		}, 0); // Small delay to ensure the class is removed and re-added
	}

	ngOnInit() {
		this.isOpen.set(true);
	}
}