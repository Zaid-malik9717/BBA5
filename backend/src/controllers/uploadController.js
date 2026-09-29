export const uploadController = {
  uploadFile(req, res) {
    try {
      if (!req.file) {
        return res.status(400).json({ success: false, message: 'No file uploaded' });
      }

      const fileUrl = `/uploads/${req.file.filename}`;
      res.status(201).json({
        success: true,
        message: 'File uploaded successfully',
        data: {
          url: fileUrl,
          filename: req.file.filename,
          size: req.file.size,
          mimetype: req.file.mimetype
        }
      });
    } catch (err) {
      res.status(500).json({ success: false, message: err.message });
    }
  }
};
