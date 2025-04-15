export const getSongsSelector = (state) => state.reducer.songs;

export const getSongsIdSelector = (state) =>
  state.reducer.songs.map((song) => song.id);

export const getTargetSongSelector = (state) => state.reducer.targetSong;

export const getAllSongsCountSelector = (state) => state.reducer.allSongsCount;

export const getIsLoadingSelector = (state) => state.reducer.isLoading;
