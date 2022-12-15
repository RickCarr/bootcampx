const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const [nodeVer, file, month, limit] = process.argv;
const inputs = [`%${month}%`, limit];
const noHaxQuery = `
SELECT students.id as student_id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts on cohort_id = cohorts.id
WHERE cohorts.name LIKE $1
LIMIT $2;
`
pool.query(noHaxQuery,inputs)
  .then(res => {
    res.rows.forEach(user => {
      console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
    });

  })
  .catch (err => console.error('query error', err.stack));