use sakila;
-- 1. ¿Qué consulta ejecutarías para obtener todos los clientes dentro de city_id = 312? 
-- Su consulta debe devolver el nombre, apellido, correo electrónico y dirección del cliente.
 ,,,m,.....................................................................................................................................

-- 2. ¿Qué consulta harías para obtener todas las películas de comedia?
-- Su consulta debe devolver el título de la película, la descripción, el 
-- año de estreno, la calificación,las características especiales y el género (categoría).


SELECT FILM_CATEGORY.category_id, film.title, film.description, film.release_year, film.special_features
FROM film 
FILM JOIN FILM_CATEGORY
 ON FILM.film_id = FILM_CATEGORY.film_id 
 where FILM_CATEGORY.category_id=5;

-- 3. ¿Qué consulta harías para obtener todas las películas unidas por actor_id = 5? 
-- Su consulta debe devolver la identificación del actor, el nombre del actor, el título de la película,
-- la descripción y el año de lanzamiento.

select actor.first_name, actor.last_name, film.title, film.description, film.release_year
from film
Join film_actor on film.film_id= film_actor.film_id
inner join actor on film_actor.actor_id=actor.actor_id
where actor.actor_id= 5;

-- 4. ¿Qué consulta ejecutaría para obtener todos los clientes en store_id = 1 y dentro 
-- de estas ciudades (1, 42, 312 y 459)? Su consulta debe devolver el nombre, apellido, 
-- correo electrónico y dirección del cliente.

select customer.first_name, customer.last_name, customer.email, address.address
from customer
join address on address.address_id=customer.address_id
where customer.store_id= 1 and (address.city_id= 1 or address.city_id= 42 or address.city_id=312 or address.city_id=459);
-- 
select customer.first_name, customer.last_name, customer.email, address.address
from customer
join address on address.address_id=customer.address_id
where customer.store_id= 1 and  address.city_id in ( 1,42,312,459); -- 

