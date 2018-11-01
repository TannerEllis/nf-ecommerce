insert into nf_cart (users_id, product_id, product_quantity, size_code)
values ($1, $2, $3, $4);

select * from nf_cart 
where users_id = $1;