const express = require('express');
const app = express();

app.use(express.json());

const cors = require('cors');
app.use(cors());

const helmet = require('helmet');
app.use(helmet({ crossOriginResourcePolicy: false }));

app.use(express.urlencoded({ limit: '5mb', extended: true }));
const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('comics.db', (error) => {
    if (error) {
        console.log(error.message);
        return ({ message: 'Database cannot be opened' + error.message });
    }
});

app.listen(8080, () => {
    console.log('Node works on localhost: 8080');
});

app.get('/', (req, res) => {
    return res.status(200).json({ message: 'OK' });
});

app.get('/comics/all', (req, res) => {
    db.all('SELECT * FROM comics', (error, result) => {
        if (error) {
            console.log(error.message);
            return res.status(400).json({ message: error.message });
        }
        return res.status(200).json(result);
    });
});

app.get('/comics/one/:id', (req, res) => {
    let id = req.params.id;

    db.get('SELECT * FROM comics WHERE id = ?', [id], (error, result) => {
        if (error) {
            console.log(error.message);
            return res.status(400).json({ message: error.message });
        }

        if (typeof (result) == 'undefined') {
            return res.status(404).json({ message: 'The searched comic does not exist' });
        }

        return res.status(200).json(result);
    })
})

app.get('/comics/images', (req, res) => {
    db.all('SELECT image FROM comics WHERE image IS NOT NULL', (error, result) => {
        if (error) {
            console.log(error.message);
            return res.status(400).json({ message: error.message });
        }

        return res.status(200).json(result);
    });
});

app.delete('/comics/delete/:id', (req, res) => {
    let id = req.params.id;

    db.run('DELETE FROM comics WHERE id = ?', [id], function (error) {
        if (error) {
            console.log(error.message);
            return res.status(400).json({ message: error.message });
        }

        if (this.changes === 0) {
            console.log('Nothing to delete');
            return res.status(404).json({ message: 'The requested comic for deletion does not exist' });
        }

        return res.status(200).json({ count: this.changes });
    });
});

// image handling
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './images');
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

app.post('/comics/add', upload.single('image'), (req, res) => {
    let comic = req.body;

    let imageName = null;
    if (req.file) {
        imageName = req.file.originalname;
    }

    db.run('INSERT INTO comics (name, additionalName, translation, originalName, artist, writer, details, pages, publicationYear, ISBN, selfPublished, publisher, language, dateRead, image, ownThoughts) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [comic.name, comic.additionalName, comic.translation, comic.originalname, comic.artist, comic.writer, comic.details, comic.pages, comic.publicationYear, comic.ISBN, comic.selfPublished, comic.publisher, comic.language, comic.dateRead, comic.image, comic.ownThoughts], (error) => {
        if (error) {
            console.log(error.message);
            return res.status(400).json({ message: error.message });
        }

        return res.status(200).json({ count: 1 });
    });
});

// image
app.get('/download/:name', (req, res) => {
    let file = './images/' + req.params.name;
    res.download(file);
});

app.get('*', (req, res) => {
    return res.status(404).json({ message: 'No requested service' });
});