const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());

const Folder = 'C:\\Users\\Ye Gao\\Downloads\\counterspell-gallery\\public\\TORONTO';
app.get('/api/photo', (req, res) => {
  try {
    console.log(`Reading directory: ${Folder}`);

    const files = fs.readdirSync(Folder);

    console.log('Files found:', files);

    const supportedFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      const isSupported = ['.heic', '.jpg', '.jpeg', '.png', '.mov', '.mp4'].includes(ext);
      
      console.log(`File ${file}: ${isSupported ? 'Supported' : 'Unsupported'}`);
      
      return isSupported;
    });

    const photo = supportedFiles.map(file => {
      const fullPath = path.join(Folder, file);
      const ext = path.extname(file).toLowerCase();
      
      const photoItem = {
        filename: file,
        path: fullPath,
        type: ['.mov', '.mp4'].includes(ext) ? 'video' : 'image'
      };

      console.log('photo item:', photoItem);

      return photoItem;
    });

    console.log(`Total photo found: ${photo.length}`);

    res.json(photo);
  } catch (error) {
    console.error('Error reading directory:', error);
    res.status(500).json({ 
      error: 'Failed to read directory', 
      details: error.message 
    });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});