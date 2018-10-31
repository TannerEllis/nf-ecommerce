create table nf_users (
users_id serial primary key, 
first_name varchar(20),
last_name varchar(20), 
auth_id text
)

create table nf_cart (
    cart_id serial primary key,
    users_id int, 
    product_id int references nf_merch,
    product_quantity int,
    size_code varchar(4)
)

create table nf_merch (
    product_id serial primary key,
    product_type varchar(25),
    product_image text,
    product_price int,
    product_desc text,
    product_details text
)



-- insert into nf_merch (product_type, product_image, product_price, product_desc, product_details)
-- values 
-- ('Beanie', 'https://s3.amazonaws.com/nfmerch/beanie.jpeg', 25, 'NF Patch Beanie', 'Embroidered Design 100% Acrylic Long Beanie Snug Fit Cuffed Beanie'),
-- ('Hat', 'https://s3.amazonaws.com/nfmerch/hat1.jpg', 30 , 'NF Snapback', '3D NF Logo embroidered on an adjustable Snapback'),
-- ('Hat', 'https://s3.amazonaws.com/nfmerch/hat2.jpg', 30, 'NF Snapback', '3D NF Logo embroidered on an adjustable Snapback'),
-- ('Hat', 'https://s3.amazonaws.com/nfmerch/hat3.jpg', 30, 'Black NF Logo Dad Hat', 'Black Stitched NF Logo on a Black Dad Hat (soft top metal adjustable clasp on back with a rounded bill) black and white NF Logo tag detail on back of the hat.'),
-- ('Hat', 'https://s3.amazonaws.com/nfmerch/hat4.jpg', 30, 'White WHY Hat', 'BLack Stitched WHY on a White Dad Hat (soft top metal adjustable clasp on back with a rounded bill) black and white NF Logo tag detail on back of the hat.'),
-- ('Hat', 'https://s3.amazonaws.com/nfmerch/hat5.jpg', 30, 'Black WHY Hat', 'White Stitched WHY on a black Dad Hat (soft top metal adjustable clasp on back with a rounded bill) black and black NF Logo tag detail on back of the hat.'),
-- ('Hat', 'https://s3.amazonaws.com/nfmerch/hat6.jpg', 30, 'REAL Dad Hat', 'White Stitched REAL on a Black Dad Hat (soft top metal adjustable clasp on back with a rounded bill) black and white NF Logo tag detail on back of the hat.'),
-- ('Hoodie', 'https://s3.amazonaws.com/nfmerch/hoodie1.jpg', 50, 'NF BLACK HOODIE', 'NF Logo Hoodie'),
-- ('Hoodie', 'https://s3.amazonaws.com/nfmerch/hoodie2.jpg', 50, 'NF GRAY HOODIE', 'NF Logo Hoodie'),
-- ('Hoodie', 'https://s3.amazonaws.com/nfmerch/hoodie3.jpeg', 50, 'NF REAL HOODIE', 'NF REAL Hoodie'),
-- ('Hoodie', 'https://s3.amazonaws.com/nfmerch/hoodie4.jpg', 50, 'NF OUTCAST HOODIE', 'NF Outcast White stitched letters on front'),
-- ('Shirt', 'https://s3.amazonaws.com/nfmerch/shirt1.jpg', 30, 'Why Image T-Shirt', 'Black shirt with red WHY detail' ),
-- ('Shirt', 'https://s3.amazonaws.com/nfmerch/shirt2.jpg', 30, 'Perception T-Shirt', 'Gray shirt with White Perception detail'),
-- ('Shirt', 'https://s3.amazonaws.com/nfmerch/shirt3.jpg', 30, 'NF Logo Long T-Shirt', 'Black shirt with White NF Logo'),
-- ('Shirt', 'https://s3.amazonaws.com/nfmerch/shirt4.jpg', 30, 'NF Faces T-Shirt', 'Black shirt with portrait'),
-- ('Shirt', 'https://s3.amazonaws.com/nfmerch/shirt5.jpg', 30, 'NF Let You Down T-Shirt', 'White shirt with LET YOU DWN detail'),
-- ('Shirt', 'https://s3.amazonaws.com/nfmerch/shirt6.jpg', 30, 'NF Why Long Sleeve', 'White shirt with red WHY detail'),
-- ('Shirt', 'https://s3.amazonaws.com/nfmerch/shirt7.jpg', 30, 'NF Real Long Sleeve', 'Black shirt with white REAL detail'),
--('Mansion', 'https://s3.amazonaws.com/nfmerch/nf-mansion.jpg', 10, 'Mansion CD', 'Tracklist'),
--('Therapy Session', 'https://s3.amazonaws.com/nfmerch/nf-therapysession.jpg', 10, 'Therapy Session CD', 'Tracklist'),
--('Perception', 'https://s3.amazonaws.com/nfmerch/nf-perception.jpg', 10, 'Perception CD', 'Tracklist')


-- insert into nf_inventory (product_id, size_code, quantity)
-- values 
-- (1, null, 5000),
-- (2, null, 5000),
-- (3, null, 5000),
-- (4, null, 5000),
-- (5, null, 5000),
-- (6, null, 5000),
-- (7, null, 5000),
-- (8, 'S', 5000),
-- (8, 'M', 5000),
-- (8, 'XL', 5000),
-- (8, 'XXL', 5000),
-- (9, 'S', 5000),
-- (9, 'M', 5000),
-- (9, 'XL', 5000),
-- (9, 'XXL', 5000),
-- (10, 'S', 5000),
-- (10, 'M', 5000),
-- (10, 'XL', 5000),
-- (10, 'XXL', 5000),
-- (11,'S', 5000),
-- (11,'M', 5000),
-- (11,'XL', 5000),
-- (11,'XXL', 5000),
-- (12, 'S', 5000),
-- (12, 'M', 5000),
-- (12, 'XL', 5000),
-- (12, 'XXL', 5000),
-- (13, 'S', 5000),
-- (13, 'M', 5000),
-- (13, 'XL', 5000),
-- (13, 'XXL', 5000),
-- (14, 'S', 5000),
-- (14, 'M', 5000),
-- (14, 'XL', 5000),
-- (14, 'XXL', 5000),
-- (15, 'S', 5000),
-- (15, 'M', 5000),
-- (15, 'XL', 5000),
-- (15, 'XXL', 5000),
-- (16, 'S', 5000),
-- (16, 'M', 5000),
-- (16, 'XL', 5000),
-- (16, 'XXL', 5000),
-- (17, 'S', 5000),
-- (17, 'M', 5000),
-- (17, 'XL', 5000),
-- (17, 'XXL', 5000),
-- (18, 'S', 5000),
-- (18, 'M', 5000),
-- (18, 'XL', 5000),
-- (18, 'XXL', 5000)

