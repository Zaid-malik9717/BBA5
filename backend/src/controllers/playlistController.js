import { db } from '../storage/db.js';

export const playlistController = {
  getPlaylists(req, res) {
    try {
      const playlists = db.findAll('playlists');
      res.json({ success: true, count: playlists.length, data: playlists });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },

  getPlaylistById(req, res) {
    try {
      const playlist = db.findById('playlists', req.params.id);
      if (!playlist) {
        return res.status(404).json({ success: false, message: 'Playlist not found' });
      }
      res.json({ success: true, data: playlist });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },

  createPlaylist(req, res) {
    try {
      const {
        playlistName = 'Songs That Remind Me of You 💗',
        recipient = 'Sarah',
        sender = 'Me',
        tracks = [],
        isDraft = false
      } = req.body;

      const newPlaylist = db.create('playlists', {
        playlistName,
        recipient,
        sender,
        tracks,
        isDraft,
        trackCount: tracks.length
      });

      res.status(201).json({
        success: true,
        message: isDraft ? 'Draft saved successfully ✨' : 'Playlist finalized successfully 🎉',
        data: newPlaylist
      });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },

  getCatalogSongs(req, res) {
    try {
      const { search } = req.query;
      let songs = db.findAll('songs');
      if (search) {
        const q = search.toLowerCase();
        songs = songs.filter(
          (s) => s.title.toLowerCase().includes(q) || s.artist.toLowerCase().includes(q)
        );
      }
      res.json({ success: true, count: songs.length, data: songs });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  },

  deletePlaylist(req, res) {
    try {
      const deleted = db.deleteById('playlists', req.params.id);
      if (!deleted) {
        return res.status(404).json({ success: false, message: 'Playlist not found' });
      }
      res.json({ success: true, message: 'Playlist deleted' });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  }
};
