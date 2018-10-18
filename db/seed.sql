create table nf_users (
users_id serial primary key, 
first_name varchar(20),
last_name varchar(20), 
auth_id text
)

create table nf_cart (
    users_id int, 
    product_id int references nf_merch,
    product_quantity int
)

create table nf_merch (
    product_id serial primary key,
    product_type varchar(25),
    product_image text,
    product_price int
)

create table nf_inventory (
    product_id int references nf_merch,
    size_code varchar(4),
    quantity int 
)

-- insert into nf_merch (product_type, product_image, product_size, product_price, product_quantity)
-- values 
-- ('Beanie', 'https://s3.amazonaws.com/nfmerch/beanie.jpeg', 25),
-- ('Hat', 'https://s3.amazonaws.com/nfmerch/hat1.jpg', 30),
-- ('Hat', 'https://s3.amazonaws.com/nfmerch/hat2.jpg', 30),
-- ('Hat', 'https://s3.amazonaws.com/nfmerch/hat3.jpg', 30),
-- ('Hat', 'https://s3.amazonaws.com/nfmerch/hat4.jpg', 30),
-- ('Hat', 'https://s3.amazonaws.com/nfmerch/hat5.jpg', 30),
-- ('Hat', 'https://s3.amazonaws.com/nfmerch/hat6.jpg', 30),
-- ('Hoodie', 'https://s3.amazonaws.com/nfmerch/hoodie1.jpg', 30),
-- ('Hoodie', 'https://s3.amazonaws.com/nfmerch/hoodie2.jpg', 30),
-- ('Hoodie', 'https://s3.amazonaws.com/nfmerch/hoodie3.jpeg', 30),
-- ('Hoodie', 'https://s3.amazonaws.com/nfmerch/hoodie4.jpg', 30),
-- ('Shirt', 'https://s3.amazonaws.com/nfmerch/shirt1.jpg', 30),
-- ('Shirt', 'https://s3.amazonaws.com/nfmerch/shirt2.jpg', 30),
-- ('Shirt', 'https://s3.amazonaws.com/nfmerch/shirt3.jpg', 30),
-- ('Shirt', 'https://s3.amazonaws.com/nfmerch/shirt4.jpg', 30),
-- ('Shirt', 'https://s3.amazonaws.com/nfmerch/shirt5.jpg', 30),
-- ('Shirt', 'https://s3.amazonaws.com/nfmerch/shirt6.jpg', 30),
-- ('Shirt', 'https://s3.amazonaws.com/nfmerch/shirt7.jpg', 30)


