import { SongInterface } from '@/models';
import { create } from 'zustand'

interface MusicStoreState {
    currentlyPlaying: { song: Howl | null, infos: SongInterface | null },
    isPlaying: boolean
    addSong: (song: Howl, infos: SongInterface) => void;
    pause: () => void;
    play: () => void;
}

const useMusic = create<MusicStoreState>((set) => ({
  currentlyPlaying: { song: null, infos: null },
  isPlaying: false,
  addSong: (song, infos) => set((store) => {
    store.currentlyPlaying.song?.stop()
    return { currentlyPlaying: { song, infos } }
  }),
  pause: () => set((state) => {
    state.currentlyPlaying.song?.pause()
    return { isPlaying: false }
  }),
  play: () => set((state) => {
    state.currentlyPlaying.song?.play()
    return { isPlaying: true }
  })
}))

export { useMusic }