update nf_cart
set product_quantity = $2
where product_id = $3 and users_id = $1;

 select * from 
 nf_cart
 join nf_merch on nf_cart.product_id = nf_merch.product_id
 where nf_cart.users_id = $1
 order by nf_cart.cart_id asc;