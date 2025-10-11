import { computed, Injectable, signal } from '@angular/core';
import { Song } from '../interfaces/song';
import { song_data } from '../data/song_data';

@Injectable({
	providedIn: 'root'
})
export class MusicPlayer {
	songs = signal<Song[]>(song_data);

	// Index of the currently playing song
	currentSongIdx = signal<number>(0);

	// Current song object (computed)
	currentSong = computed(() => {
		const list = this.songs();
		const idx = this.currentSongIdx();
		return list[idx] ?? null;
	});

	// Reactive playing/paused state
	isPlaying = signal<boolean>(false);
	canPlayAudio = signal<boolean>(false);

	/** Play a song by index */
	playSong(idx?: number) {
		if (idx !== undefined && idx >= 0 && idx < this.songs().length) {
			this.currentSongIdx.set(idx);
		}
		this.isPlaying.set(true);
		this.updatePlayingState();
	}

	/** Pause the current song */
	pauseSong() {
		this.isPlaying.set(false);
		this.updatePlayingState();
	}

	/** Move to next song */
	nextSong() {
		const nextIdx = (this.currentSongIdx() + 1) % this.songs().length;
		this.currentSongIdx.set(nextIdx);
		this.isPlaying.set(true);
		this.updatePlayingState();
	}

	/** Move to previous song */
	previousSong() {
		const prevIdx = (this.currentSongIdx() - 1 + this.songs().length) % this.songs().length;
		this.currentSongIdx.set(prevIdx);
		this.isPlaying.set(true);
		this.updatePlayingState();
	}

	/** Update the playingSong property inside the songs array */
	private updatePlayingState() {
		this.songs.update(list => {
			return list.map((song, idx) => ({
				...song,
				playingSong: idx === this.currentSongIdx() && this.isPlaying()
			}));
		});
	}
}
