SELECT * FROM hr.employees;
SELECT * FROM hr.jobs;
SELECT * FROM hr.job_history;
-- req 18
-- https://pt.stackoverflow.com/questions/247070/como-formatar-data-e-hora-do-mysql-para-o-formato-brasileiro-em-php
SELECT 
CONCAT(E.FIRST_NAME, ' ', E.LAST_NAME) 'Nome completo',
DATE_FORMAT(JH.START_DATE, '%d/%m/%Y') 'Data de início',
DATE_FORMAT(JH.END_DATE, '%d/%m/%Y') 'Data de rescisão',
ROUND(DATEDIFF(JH.END_DATE, JH.START_DATE) / 365, 2) 'Anos trabalhados'
FROM hr.employees E
INNER JOIN hr.job_history JH ON E.EMPLOYEE_ID = JH.EMPLOYEE_ID
ORDER BY `Nome completo`, `Anos trabalhados`;

-- req 19
 
SELECT  COUNT(*) FROM hr.employees WHERE MONTH(HIRE_DATE) = 6 AND YEAR(HIRE_DATE) = 1987 ;

USE hr;

DELIMITER $$
CREATE FUNCTION exibir_quantidade_pessoas_contratadas_por_mes_e_ano(mes INT, ano INT)
RETURNS INT READS SQL DATA
BEGIN
DECLARE total_hired INT;
SELECT  
COUNT(*) 
FROM hr.employees 
WHERE MONTH(HIRE_DATE) = mes AND YEAR(HIRE_DATE) = ano
INTO total_hired;
RETURN total_hired;
END $$

DELIMITER ;

SELECT exibir_quantidade_pessoas_contratadas_por_mes_e_ano(6, 1987);

-- req 20

SELECT * FROM hr.employees;
SELECT * FROM hr.departments;
SELECT * FROM hr.jobs;
SELECT * FROM hr.job_history;

USE hr;

DELIMITER $$
CREATE PROCEDURE exibir_historico_completo_por_funcionario(IN employee_email VARCHAR(100))
BEGIN
SELECT
CONCAT(E.FIRST_NAME, ' ', E.LAST_NAME) 'Nome completo',
D.DEPARTMENT_NAME 'Departamento',
J.JOB_TITLE 'Cargo'
FROM hr.employees E
INNER JOIN hr.job_history JH ON E.EMPLOYEE_ID = JH.EMPLOYEE_ID
INNER JOIN hr.departments D ON JH.DEPARTMENT_ID = D.DEPARTMENT_ID
INNER JOIN hr.jobs J ON J.JOB_ID = JH.JOB_ID
WHERE EMAIL = employee_email
ORDER BY `Cargo` ;
END $$

DELIMITER ;

CALL exibir_historico_completo_por_funcionario('NKOCHHAR');