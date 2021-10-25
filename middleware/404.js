const notFound = (req, res) => res.status(404).send('Unavailable route');


module.exports = notFound;