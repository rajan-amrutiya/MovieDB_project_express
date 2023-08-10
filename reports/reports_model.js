const client = require("../connectionPG");

function movielistByCityQuery(cityname) {
    let query = `  select distinct m.name from movie m
                   inner join show s
                   on s.movie_id = m.id
                   inner join cinema_hall chall
                   on chall.id = s.cinema_hall_id
                   inner join cinema 
                   on chall.cinema_id = cinema.id
                   inner join city 
                   on cinema.city_id = city.id
                   where city.id = (select id from city where city.name = $1);`;
    return client.query(query, [cityname]);
};

function selectCinemaQuery(cinemaName) {
    let query = `   select distinct m.name from movie m
                    join show s 
                    on s.movie_id = m.id
                    join cinema_hall chall
                    on chall.id = s.cinema_hall_id
                    join cinema
                    on cinema.id = chall.cinema_id
                    where cinema.name = $1;`;
    return client.query(query, [cinemaName]);
};

function selectMovieQuery(movieName) {
    let query = `select * from movie where movie.name = $1`;
    return client.query(query, [movieName]);
};

function seatingPlanQuery(cityName, movieName, cinema, cinema_hall) {
    let query = `   select distinct ssp.seat_id, ssp.status, ssp.booking_id from show_seating_plan ssp
                    join show_section ss on ssp.show_section_id = ss.id 
                    join show on show.id = ss.show_id
                    join movie on movie.id = show.movie_id
                    join cinema_hall ch on ch.id = show.cinema_hall_id
                    join cinema on cinema.id = ch.cinema_id 
                    join city on city.id = cinema.city_id
                    where city.name = $1 and movie.name = $2 and cinema.name = $3 and ch.name = $4;`
    return client.query(query, [cityName, movieName, cinema, cinema_hall]);
};

function top10actorsQuery() {
    let query = `  select name from actor
                   where id in 
                   (select actor_id from movie_cast mc group by actor_id order by count(mc.actor_id) desc limit 10);`
    return client.query(query);
};

function movieYearQuery(year) {
    let query = `  select name, release_date from movie 
                   where release_date::text like '${year}%'`;
    return client.query(query);
};

function top10customersQuery() {
    let query = `  select name from customer cstmr
                   where id in (select customer_id from booking 
                   group by customer_id 
                   order by count(customer_id) desc 
                   limit 10);`
    return client.query(query);
};

function totalbookingsQuery() {
    let query = `   select cinema.name,count(bkng.booking_id ) bookings , ssp.status from booking bkng
                    join show_seating_plan ssp on ssp.booking_id = bkng.id
                    join seat on seat.id = ssp.seat_id
                    join cinema_hall_section chs on chs.id = seat.cinema_hall_section_id
                    join cinema_hall c_hall on c_hall.id = chs.cinema_hall_id
                    join cinema on cinema.id = c_hall.cinema_id
                    join city on city.id = cinema.city_id
                    where ssp.status = 'Booked'
                    group by cinema.name, ssp.status;`
    return client.query(query);
};

function bookedtickets_customer_Query(){
    let query = ` select distinct cstmr.name, ssp.status from customer cstmr
                  join booking bkng on cstmr.id = bkng.customer_id
                  join show_seating_plan ssp on bkng.id = ssp.booking_id
                  where ssp.status = 'Booked';`
    return client.query(query);
};

function booked_customers_Query(movie, cinema_hall){
    let query = `   select distinct cstmr.name customer_name, movie.name movie_name,c_hall.name, ssp.status
                    from customer cstmr
                    join booking bkng on cstmr.id = bkng.customer_id
                    join show_seating_plan ssp on bkng.id = ssp.booking_id
                    join show_section shsec on shsec.id = ssp.show_section_id
                    join show on show.id = shsec.show_id
                    join movie on movie.id = show.movie_id
                    join cinema_hall c_hall on c_hall.id = show.cinema_hall_id
                    where ssp.status = 'Booked' and movie.name = $1 and c_hall.name = $2;`
    return client.query(query, [movie, cinema_hall]);
}
module.exports = {
    movielistByCityQuery,
    selectCinemaQuery,
    selectMovieQuery,
    seatingPlanQuery,
    top10actorsQuery,
    movieYearQuery,
    top10customersQuery,
    totalbookingsQuery,
    bookedtickets_customer_Query,
    booked_customers_Query
}
