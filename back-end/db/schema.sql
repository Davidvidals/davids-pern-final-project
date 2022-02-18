DROP DATABASE IF EXISTS cta_dev;
CREATE DATABASE cta_dev;

\c cta_dev;

DROP TABLE IF EXISTS funkos ;

CREATE TABLE funkos (
    id SERIAL PRIMARY KEY, 
    name TEXT,
    price INT,
    edition TEXT,
    image TEXT,
    featured BOOLEAN
);
