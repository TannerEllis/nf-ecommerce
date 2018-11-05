delete from nf_cart
where users_id = $1;

select * from nf_cart
where users_id = $1;