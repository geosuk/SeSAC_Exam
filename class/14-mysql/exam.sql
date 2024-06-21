create table products (
	id int auto_increment primary key,
	name varchar(50) not null,
    model_number varchar(15) not null,
    series varchar(30) not null
);

create table member(
	id varchar(20) primary key,
    name varchar(5) not null,
    age int,
    gender varchar(2) not null,
    email varchar(50),
    promotion varchar(2)
);