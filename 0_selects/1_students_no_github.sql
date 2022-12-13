SELECT id, name, email, cohort_id
  FROM students
  WHERE github = NULL 
  ORDER BY cohort_id;

