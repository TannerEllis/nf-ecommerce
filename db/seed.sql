create table nf_users (
users_id serial primary key, 
first_name varchar(20),
last_name varchar(20), 
auth_id text
)

create table nf_merch (
    users_id int references nf_users,
    product_id int, 
    product_quantity int
)

create table nf_cart (
    product_id int,
    product_type varchar(25),
    product_image text,
    product_size varchar(10),
    product_price int,
    product_quantity int
)
