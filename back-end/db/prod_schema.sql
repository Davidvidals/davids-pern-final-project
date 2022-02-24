DROP TABLE IF EXISTS funkos ;

CREATE TABLE funkos (
    id SERIAL PRIMARY KEY, 
    name TEXT,
    price INT,
    edition TEXT,
    image TEXT,
    description TEXT,
    featured BOOLEAN
);
