SELECT * FROM hr.regions;
SELECT * FROM hr.countries;

-- req 1

SELECT COUNTRY_NAME AS 'País', REPLACE(REGION_ID, REGION_id, IF(REGION_ID = 1, 'Incluído', 'Não incluído')) AS 'Status Inclusão'
FROM hr.countries;


SELECT 
	COUNTRY_NAME AS 'País', 
    CASE
		WHEN REGION_ID = 1 THEN 'incluído'
        ELSE 'não incluído'
	END AS 'Status Inclusão'
FROM hr.countries
ORDER BY COUNTRY_NAME;

-- req 2 

SELECT * FROM hr.jobs;

SELECT 
	JOB_TITLE AS 'Cargo',
    CASE 
		WHEN MAX_SALARY >= 5000 AND MAX_SALARY <= 10000 THEN 'Baixo'
        WHEN MAX_SALARY <= 20000 THEN 'Médio'
		WHEN MAX_SALARY <= 30000 THEN 'Alto'
        ELSE 'Altíssimo'
	END AS 'Nível'
FROM hr.jobs
ORDER BY JOB_TITLE;


-- req 3

SELECT 
	JOB_TITLE AS 'Cargo', 
    MAX_SALARY - MIN_SALARY AS 'Diferença entre salários máximo e mínimo'
FROM hr.jobs
ORDER BY `Diferença entre salários máximo e mínimo` ASC, `Cargo`;

-- req 4 

SELECT * FROM hr.jobs where JOB_TITLE = 'Stock Clerk';
SELECT AVG(SALARY) FROM hr.employees where JOB_ID = 'ST_CLERK';
SELECT * FROM hr.employees where JOB_ID = 'ST_CLERK';

SELECT 
	J.JOB_TITLE AS 'Cargo', 
    ROUND(AVG(E.SALARY), 2) AS 'Média salarial',
    CASE 
		WHEN ROUND(AVG(E.SALARY), 2) >= 2000 AND ROUND(AVG(E.SALARY), 2) <= 5800 THEN 'Júnior'
        WHEN ROUND(AVG(E.SALARY), 2) <= 7500 THEN 'Pleno'
        WHEN ROUND(AVG(E.SALARY), 2) <= 10500 THEN 'Sênior'
        ELSE 'CEO'
    END AS 'Senioridade'
FROM hr.jobs J
INNER JOIN hr.employees E
ON J.JOB_ID = E.JOB_ID
GROUP BY J.JOB_TITLE
ORDER BY `Média salarial`, `Cargo`;

-- req 5


SELECT * FROM hr.jobs;
SELECT * FROM hr.employees;
SELECT MIN(SALARY) FROM hr.employees where JOB_ID = 'AD_PRES';


SELECT 
	JOB_TITLE AS 'Cargo',
    MAX_SALARY - MIN_SALARY AS 'Variação Salarial', 
	ROUND(MIN_SALARY/ 12, 2) AS 'Média mínima mensal',
    ROUND(MAX_SALARY/ 12, 2) AS 'Média máxima mensal'
FROM hr.jobs 
ORDER BY `Variação Salarial`, `Cargo`;

-- req 6
SELECT * FROM hr.job_history; -- WHERE EMPLOYEE_ID = 101;
SELECT * FROM hr.employees;
SELECT * FROM hr.jobs;
SELECT * FROM hr.departments;
    
SELECT 
CONCAT(E.FIRST_NAME, ' ', E.LAST_NAME) AS 'Nome completo',
J.JOB_TITLE AS 'Cargo',
JB.START_DATE AS 'Data de início do cargo',
D.DEPARTMENT_NAME AS 'Departamento'
FROM hr.employees E 
INNER JOIN hr.job_history JB ON JB.EMPLOYEE_ID = E.EMPLOYEE_ID
INNER JOIN hr.jobs J ON J.JOB_ID = JB.JOB_ID
INNER JOIN hr.departments D ON D.DEPARTMENT_ID = JB.DEPARTMENT_ID
ORDER BY `Nome completo` DESC, `Cargo`;

-- req 7

SELECT * FROM hr.job_history; -- WHERE EMPLOYEE_ID = 101;
SELECT * FROM hr.employees;

SELECT 
UCASE(CONCAT(E.FIRST_NAME, ' ', E.LAST_NAME)) AS 'Nome completo',
JB.START_DATE AS 'Data de início',
E.SALARY AS 'Salário'
FROM hr.employees E 
INNER JOIN hr.job_history JB ON JB.EMPLOYEE_ID = E.EMPLOYEE_ID
WHERE MONTH(JB.START_DATE) BETWEEN 1 AND 3
ORDER BY `Nome completo`, `Data de início`;

