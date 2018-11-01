insert into nf_cart (users_id, product_id)
values ($1, $2);

select * from nf_cart 
where users_id = $1;