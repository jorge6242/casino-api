const express = require('express');
const { index, search, getSlots } = require('../controlles/Country');
const app = express();


/* Routes  */

app.get('/country', (req, res) => {
    index().then(response => {
        const { countries } = response;
        return res.json({
            ok: true,
            countries,
        })
    }).catch(err => {
        return res.status(400).json({
            ok: false,
            err,
        });
    });
});

app.get('/search-country', (req, res) => {
    let name = req.query.term || '';
    search(name).then(response => {
        const { countries } = response;
        if (countries === undefined) {
            return res.json({
                ok: false,
                countries: [],
            });
        }
        return res.json({
            ok: true,
            countries,
        })
    }).catch(err => {
        return res.status(400).json({
            ok: false,
            err,
        });
    });
});

app.get('/slots', (req, res) => {
    const slots = getSlots();
    if (slots.length > 0) {
        return res.json({
            ok: true,
            slots,
        });
    } else {
        return res.json({
            ok: false,
            slots: [],
        });
    }
});

module.exports = app;