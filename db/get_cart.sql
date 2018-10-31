 select * from 
 nf_cart
 join nf_merch on nf_cart.product_id = nf_merch.product_id
 where nf_cart.users_id = $1
 order by nf_cart.cart_id asc;

 -- select * from 
--  nf_cart c
--  join nf_merch m on c.product_id = m.product_id
--  where c.users_id = $1
--  order by c.cart_id asc

--short hand

