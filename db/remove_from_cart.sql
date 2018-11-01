delete from nf_cart
where product_id = $2;

 select * from 
 nf_cart
 join nf_merch on nf_cart.product_id = nf_merch.product_id
 where nf_cart.users_id = $1
 order by nf_cart.cart_id asc;