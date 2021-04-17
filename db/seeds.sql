USE burgers_db;

-- Write insert queries to populate the `burgers` table
-- with at least three entries.
Insert into burgers (burger_name, devoured)
values ("BLT burger", false),
("Happy meal burger", true),
("Giant burger", false);

SELECT * FROM burgers;