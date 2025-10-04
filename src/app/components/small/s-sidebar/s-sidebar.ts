import { AfterViewInit, Component, effect, ElementRef, inject, signal, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { StateService } from '../../../services/state-service';
import { DecimalPipe } from '@angular/common';
import { Highlights } from '../../../interfaces/highlight';
import { Song } from '../../../interfaces/song';
import { MusicPlayer } from '../../../services/music-player';

@Component({
	selector: 'app-s-sidebar',
	imports: [RouterLink, RouterLinkActive, DecimalPipe],
	templateUrl: './s-sidebar.html',
	styleUrl: './s-sidebar.scss',
})

export class SSidebar {
	isFullScreen = signal(false);
	currentHighlight = signal(0);
	isOpen = signal(false);
	@ViewChild('audioPlayer') audioPlayerRef!: ElementRef<HTMLAudioElement>;
	@ViewChild('progressBar') progressBarRef!: ElementRef<HTMLInputElement>;

	currentSongTime = signal<number>(0);
	
	private progressAnimationFrame: number | null = null;
	private isUserSeeking = false;

	highLights: Highlights[] = [
		{
			hasImage: false,
			content: "🎉 🥳 Happy Birthday Rushikesh",
		},
		{
			hasImage: false,
			content: "🎉 🥳 Happy Birthday Trisha",
		},
		{
			hasImage: true,
			content: "🎉 🥳 Happy Birthday Kashish",
		},
		{
			hasImage: true,
			content: "Mercury rise and set in Pune Fairly close to the Sun. V i s i b l e o n l y b e f o r e s u n r i s e a n d / o r a f t e r sunset.",
		}
	]

	constructor(public playerState: MusicPlayer, public RootScope: StateService) {
		effect(() => {
			if (this.RootScope.interaction() != 0) {
				this.playSong();
			}
		});
	}

	ngAfterViewInit() {
		this.startProgressLoop();
	}

	ngOnDestroy() {
		this.stopProgressLoop();
	}

	private startProgressLoop() {
		const update = () => {
			const audio = this.audioPlayerRef.nativeElement;
			const progressBar = this.progressBarRef.nativeElement;

			if (!audio.paused && !audio.ended && !this.isUserSeeking) {
				const currentTime = audio.currentTime;
				this.currentSongTime.set(currentTime);
				progressBar.value = String(currentTime);
			}

			this.progressAnimationFrame = requestAnimationFrame(update);
		};
		this.progressAnimationFrame = requestAnimationFrame(update);
	}

	private stopProgressLoop() {
		if (this.progressAnimationFrame !== null) {
			cancelAnimationFrame(this.progressAnimationFrame);
			this.progressAnimationFrame = null;
		}
	}

	seekAudio(event: Event) {
		const audio = this.audioPlayerRef.nativeElement;
		const slider = event.target as HTMLInputElement;
		audio.currentTime = parseFloat(slider.value);
	}

	onSeekStart() { this.isUserSeeking = true; }
	onSeekEnd() { this.isUserSeeking = false; }

	onAudioEnded() {
		this.playerState.nextSong();
		setTimeout(() => this.playSong(), 50);
	}

	onAudioPaused(){
		this.playerState.pauseSong();
	}

	onAudioPlayed(){
		this.playerState.playSong();
	}


	previousSong() { this.playerState.previousSong(); setTimeout(() => this.playSong(), 50);}
	nextSong() { this.playerState.nextSong(); setTimeout(() => this.playSong(), 50); }

	pauseSong() {
		if (this.audioPlayerRef) {
			this.audioPlayerRef.nativeElement.pause();
			this.playerState.pauseSong();
		}
	}

	playSong() {
		if (this.audioPlayerRef) {
			this.audioPlayerRef.nativeElement.play().then(() => {
				this.RootScope.interaction.set(0);
				this.playerState.playSong();
			});
		}
	}


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


	openOfficalVideo(yt_link: string) {
		window.open(yt_link);
	}

}