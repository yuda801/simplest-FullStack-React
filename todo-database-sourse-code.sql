create database todos;
use todos;

create table todos(
id int not null auto_increment,
todo varchar(255) not null,
completed BOOLEAN
);

insert into todos(todo, completed)
values
("buy groceries", false);

insert into todos(todo, completed)
values
("buy groceries", false),
("buy a table", false),
("buy a databasa", false);

#DELETE FROM todos WHERE id=2;

select * from  todos;