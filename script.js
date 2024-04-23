function generateAssignment() {
    const rollNumber = document.getElementById('rollNumber').value;

    if (!rollNumber || isNaN(rollNumber)) {
        alert('Please enter a valid roll number.');
        return;
    }

    const rollNo = parseInt(rollNumber);

    let assignment;

    if (rollNo >= 1 && rollNo <= 50) {
        // Determine the assignment based on the roll number range and parity
        if (rollNo >= 1 && rollNo <= 10) {
            assignment = rollNo % 2 === 1 ?
                `<pre>
                Problem Statement: Analyzing Voter Preferences

                You are provided with a dataset containing information on registered voters in the United States. 
                The dataset includes demographic information such as age, education, and political preference. 
                Your task is to use Python and the Pandas library to perform data manipulation and analysis to gain insights into 
                the voter preferences based on their demographics.
                
                Your Python script should output the following analyses:
                
                Tasks :- 
                
                1. Basic Dataset Overview:
                   - Number of voters in the dataset.
                   - Average age of voters.
                   - Count of voters by education level.
                
                2. Voter Preferences Analysis:
                   - Percentage of voters preferring each political party.
                   - Average age of voters for each political preference.
                
                3. Education Level Impact:
                   - Political preference distribution by education level.
                
                4. Age Group Analysis:
                   - Create age groups (18-25, 26-35, 36-45, 46-55, 56-65, 65+) and analyze the political preference distribution within each group.
                
                Sample Input:
                
                The dataset ('voters.csv') is structured as follows:
                
                Name,Age,Education,Political_Preference
                John Doe,45,Bachelors,Republican
                Jane Smith,34,Masters,Democrat
                Emily Johnson,27,PhD,Independent
                Michael Brown,63,High School,Republican
                Alex Lee,22,Bachelors,Democrat
                
                Sample Output:
                
                Number of voters: 5
                Average age of voters: 38.20
                
                Count of voters by education level:
                Bachelors      2
                Masters        1
                PhD            1
                High School    1
                
                
                Percentage of voters preferring each political party:
                Democrat      40.0%
                Republican    40.0%
                Independent   20.0%
                
                
                Average age of voters for each political preference:
                Political_Preference
                Democrat      28.0
                Republican    54.0
                Independent   27.0
                
                
                Political preference distribution by education level:
                Education    Political_Preference
                Bachelors    Democrat               50.0%
                             Republican             50.0%
                High School  Republican            100.0%
                Masters      Democrat              100.0%
                PhD          Independent           100.0%
                
                
                Political preference distribution within each age group:
                Age_Group  Political_Preference
                18-25      Democrat               100.0%
                26-35      Democrat                50.0%
                            Independent            50.0%
                36-45      Republican             100.0%
                56-65      Republican             100.0%
                
                </pre>
                ` :
                `<pre>
                Problem Statement: Analyzing Employee Performance and Satisfaction

                You are provided with a dataset containing information on employees at a multinational corporation. 
                
                The dataset includes various details such as employee ID, department, years of experience, annual performance ratings, 
                and job satisfaction levels. 
                
                Your task is to use Python and the Pandas library to perform data manipulation and analysis to understand the factors 
                influencing employee performance and satisfaction.
                
                Your Python script should output the following analyses:
                
                1. Basic Dataset Overview:
                   - Total number of employees in the dataset.
                   - Average years of experience across all employees.
                   - Distribution of employees across different departments.
                
                2. Performance Analysis:
                   - Average performance rating for each department.
                   - List of top 5 employees with the highest performance ratings.
                
                3. Satisfaction Analysis:
                   - Percentage of employees with each level of job satisfaction.
                
                4. Combined Analysis:
                   - Identify any trends between performance ratings and job satisfaction.
                   - Department with the highest average job satisfaction.
                
                
                Sample Input:
                
                The dataset ('employees.csv') is structured as follows:
                
                Employee_ID,Department,Years_of_Experience,Performance_Rating,Job_Satisfaction
                E001,Finance,5,3.5,High
                E002,IT,2,2.8,Medium
                E003,Marketing,8,4.2,High
                E004,HR,3,3.0,Low
                E005,Finance,10,4.5,Very High
                
                
                Sample Output:
                
                Total number of employees: 5
                Average years of experience: 5.60
                
                Distribution of employees by department:
                Finance      2
                IT           1
                Marketing    1
                HR           1
                
                
                Average performance rating by department:
                Department
                Finance      4.00
                HR           3.00
                IT           2.80
                Marketing    4.20
                
                
                Top 5 performers:
                  Employee_ID  Performance_Rating
                4        E005                 4.5
                2        E003                 4.2
                0        E001                 3.5
                3        E004                 3.0
                1        E002                 2.8
                
                Percentage of job satisfaction levels:
                High         40.0%
                Very High    20.0%
                Medium       20.0%
                Low          20.0%
                
                
                Average performance rating by job satisfaction level:
                Job_Satisfaction
                High         3.85
                Low          3.00
                Medium       2.80
                Very High    4.50
                
                
                Department with the highest average job satisfaction:
                Finance
                
                </pre>
                `;
        } else if (rollNo >= 11 && rollNo <= 20) {
            assignment = rollNo % 2 === 1 ?
                `<pre>
                Problem Statement: Analyzing Product Sales Data

                You are provided with a dataset containing sales data for a retail store. 
                The dataset includes details such as the product ID, category, number of units sold, and sales revenue. 
                Your task is to use Python and the Pandas library to perform data manipulation and analysis to understand the sales 
                performance across different product categories.
                
                Your Python script should output the following analyses:
                
                1. Basic Dataset Overview:
                   - Total number of products in the dataset.
                   - Total sales revenue.
                   - Average units sold per product.
                
                2. Sales Performance by Category:
                   - Total sales revenue by category.
                   - Average units sold by category.
                   - Number of products in each category.
                
                3. Top Performing Products:
                   - Top 3 products by units sold.
                   - Top 3 products by sales revenue.
                
                Sample Input:
                
                The dataset ('sales_data.csv') is structured as follows:
                
                Product_ID,Category,Units_Sold,Sales_Revenue
                P001,Electronics,150,45000
                P002,Clothing,200,30000
                P003,Home Decor,100,20000
                P004,Electronics,220,66000
                P005,Clothing,180,27000
                
                Sample Output:
                
                Total number of products: 5
                Total sales revenue: $188000
                Average units sold per product: 170.00
                
                Total sales revenue by category:
                Category
                Electronics    111000
                Clothing       57000
                Home Decor     20000
                
                Average units sold by category:
                Category
                Electronics    185.0
                Clothing       190.0
                Home Decor     100.0
                
                Number of products in each category:
                Electronics    2
                Clothing       2
                Home Decor     1
                
                Top 3 products by units sold:
                  Product_ID  Units_Sold
                3       P004          220
                1       P002          200
                4       P005          180
                
                Top 3 products by sales revenue:
                  Product_ID  Sales_Revenue
                3       P004          66000
                0       P001          45000
                1       P002          30000
                
                </pre>` :
                `<pre>
                Problem Statement: Analyzing Customer Feedback for Product Improvement

                You are provided with a dataset containing customer feedback for various products sold by an online retailer. 
                The dataset includes details such as the product ID, product category, customer ID, rating, and textual feedback. 
                Your task is to use Python and the Pandas library to perform data manipulation and analysis to understand customer 
                sentiments and identify areas for product improvement.
                
                Your Python script should output the following analyses:
                
                1. Basic Dataset Overview:
                   - Total number of feedback entries.
                   - Average rating across all products.
                   - Distribution of ratings.
                
                2. Feedback Analysis by Category:
                   - Average rating for each product category.
                   - Count of feedback entries per category.
                
                3. Detailed Sentiment Analysis:
                   - Number of positive, neutral, and negative feedbacks.
                   - List of products with the most negative feedbacks.
                
                Sample Input:
                
                The dataset ('customer_feedback.csv') is structured as follows:
                
                Product_ID,Category,Customer_ID,Rating,Feedback
                P1001,Electronics,C001,4,"Great product, but the battery life could be better."
                P1002,Home Appliance,C002,2,"Not satisfied, the product broke after a week."
                P1003,Electronics,C003,5,"Excellent product with superb performance."
                P1004,Clothing,C004,3,"Decent quality but the fit is weird."
                P1005,Electronics,C005,1,"Horrible experience, stopped working within a month."
                
                Sample Output:
                
                Total number of feedback entries: 5
                Average rating across all products: 3.00
                
                Distribution of ratings:
                5    1
                4    1
                3    1
                2    1
                1    1
                
                
                Average rating by category:
                Electronics       3.33
                Home Appliance    2.00
                Clothing          3.00
                
                
                Count of feedback entries per category:
                Electronics       3
                Home Appliance    1
                Clothing          1
                
                
                Number of feedbacks by sentiment:
                Negative    2
                Positive    2
                Neutral     1
                
                Products with the most negative feedbacks:
                Product_ID  Feedback
                P1002       Not satisfied, the product broke after a week.
                P1005       Horrible experience, stopped working within a month.
                            
                </pre>` ;
        } else if (rollNo >= 21 && rollNo <= 30) {
            assignment = rollNo % 2 === 1 ?
                `<pre>
                You are provided with a dataset containing enrollment and performance data for students at a university. 
                The dataset includes details such as student ID, department, courses enrolled, grades, and semester. 
                Your task is to use Python and the Pandas library to perform data manipulation and analysis to understand trends 
                in student performance and enrollment across different departments and semesters.

                Your Python script should output the following analyses:
                
                1. Basic Dataset Overview:
                   - Total number of students in the dataset.
                   - Distribution of students across departments.
                
                2. Performance Analysis:
                   - Average grade by department.
                   - List of courses with the highest average grades.
                
                3. Enrollment Trends:
                   - Number of students enrolled per semester.
                   - Most popular courses by semester.
                
                
                Sample Input:
                
                The dataset ('student_data.csv') is structured as follows:
                
                Student_ID,Department,Courses_Enrolled,Grade,Semester
                S001,Engineering,"Math, Physics",A,Fall 2023
                S002,Arts,"History, Literature",B,Spring 2024
                S003,Science,"Biology, Chemistry",A,Fall 2023
                S004,Engineering,"Computer Science, Math",B,Fall 2023
                S005,Arts,"Literature, Art",C,Spring 2024
                
                
                Sample Output:
                
                Total number of students: 5
                Distribution of students by department:
                Engineering    2
                Arts           2
                Science        1
                
                
                Average grade by department:
                Department
                Engineering    3.5
                Arts           2.5
                Science        4.0
                
                Course with the highest average grade:
                Math
                
                Number of students per semester:
                Spring 2024    2
                Fall 2023      3
                
                
                Most popular course by semester:
                Semester
                Fall 2023      Math
                Spring 2024    Literature
            
                </pre>`:
                `<pre>
                Problem Statement: Employee Management System Analysis

                You are provided with a dataset containing employee data for a large corporation. 
                The dataset includes details such as employee ID, department, years of service, salary, and performance rating.
                 Your task is to use Python and the Pandas library to perform data manipulation and analysis to understand the 
                 distribution of employees across departments, their salary structure, and performance ratings.
                
                Your Python script should output the following analyses:
                
                1. Basic Dataset Overview:
                   - Total number of employees.
                   - Average salary across all employees.
                   - Distribution of employees by performance rating.
                
                2. Department Analysis:
                   - Average salary and average years of service by department.
                   - Count of employees in each department.
                
                3. Performance Analysis:
                   - List of employees with 'Outstanding' and 'Excellent' ratings.
                   - Average years of service for employees with each performance rating.
                
                
                Sample Input:
                
                The dataset ('employee_data.csv') is structured as follows:
                
                Employee_ID,Department,Years_of_Service,Salary,Performance_Rating
                E1001,Finance,5,70000,Excellent
                E1002,IT,3,50000,Good
                E1003,HR,10,60000,Outstanding
                E1004,Marketing,2,45000,Average
                E1005,Finance,7,80000,Good
                
                Sample Output:
                
                Total number of employees: 5
                Average salary: $63000.00
                
                Distribution of performance ratings:
                Good          2
                Excellent     1
                Outstanding   1
                Average       1
                
                
                Average salary by department:
                Department
                Finance      75000.0
                HR           60000.0
                IT           50000.0
                Marketing    45000.0
                
                
                Average years of service by department:
                Department
                Finance      6.0
                HR           10.0
                IT           3.0
                Marketing    2.0
                
                
                Count of employees in each department:
                Finance      2
                HR           1
                IT           1
                Marketing    1
                
                
                Top performers:
                  Employee_ID Performance_Rating
                0       E1001          Excellent
                2       E1003        Outstanding
                
                Average years of service by performance rating:
                Performance_Rating
                Average        2.0
                Excellent      5.0
                Good           6.0
                Outstanding   10.0
                                    
                </pre>`;
        } else if (rollNo >= 31 && rollNo <= 40) {
            assignment = rollNo % 2 === 1 ?
                `<pre>
                Problem Statement: Library Management System Analysis

                You are provided with a dataset containing information on book loans from a library management system. 
                The dataset includes details such as the loan ID, book ID, member ID, loan start date, loan end date, and loan status.
                Your task is to use Python and the Pandas library to perform data manipulation and analysis to understand the patterns of book loans, 
                the frequency of loans by book and member, and the status of current loans.
                
                Your Python script should output the following analyses:
                
                1. Basic Dataset Overview:
                   - Total number of loans in the dataset.
                   - Distribution of loan status.
                
                2. Loan Frequency Analysis:
                   - Most frequently loaned books.
                   - Members with the most loans.
                
                3. Loan Status Analysis:
                   - Number of current loans and their details.
                   - List of overdue loans.
                
                
                Sample Input:
                
                The dataset ('library_loans.csv') is structured as follows:
                
                Loan_ID,Book_ID,Member_ID,Start_Date,End_Date,Loan_Status
                L001,BK001,M001,2024-01-01,2024-01-14,Returned
                L002,BK002,M002,2024-02-01,2024-02-14,Returned
                L003,BK003,M001,2024-02-15,2024-03-01,Overdue
                L004,BK004,M003,2024-03-01,2024-03-15,Returned
                L005,BK001,M004,2024-03-05,2024-03-19,On Loan
                
                
                Sample Output:
                
                Total number of loans: 5
                Distribution of loan status:
                Returned    3
                On Loan     1
                Overdue     1
                
                
                Most frequently loaned books:
                BK001    2
                BK002    1
                BK003    1
                BK004    1
                
                
                Members with the most loans:
                M001    2
                M002    1
                M003    1
                M004    1
                
                
                Current loans:
                  Loan_ID Book_ID Member_ID   End_Date
                4    L005   BK001      M004 2024-03-19
                
                List of overdue loans:
                  Loan_ID Book_ID Member_ID   End_Date
                2    L003   BK003      M001 2024-03-01
                
                </pre>` :
                `<pre>
                Problem Statement: Analyzing Voter Preferences

                You are provided with a dataset containing information on registered voters in the United States. 
                The dataset includes demographic information such as age, education, and political preference. 
                Your task is to use Python and the Pandas library to perform data manipulation and analysis to gain insights 
                into the voter preferences based on their demographics.
                
                Your Python script should output the following analyses:
                
                Tasks :- 
                
                1. Basic Dataset Overview:
                   - Number of voters in the dataset.
                   - Average age of voters.
                   - Count of voters by education level.
                
                2. Voter Preferences Analysis:
                   - Percentage of voters preferring each political party.
                   - Average age of voters for each political preference.
                
                3. Education Level Impact:
                   - Political preference distribution by education level.
                
                4. Age Group Analysis:
                   - Create age groups (18-25, 26-35, 36-45, 46-55, 56-65, 65+) and analyze the political preference distribution within each group.
                
                Sample Input:
                
                The dataset ('voters.csv') is structured as follows:
                
                Name,Age,Education,Political_Preference
                John Doe,45,Bachelors,Republican
                Jane Smith,34,Masters,Democrat
                Emily Johnson,27,PhD,Independent
                Michael Brown,63,High School,Republican
                Alex Lee,22,Bachelors,Democrat
                
                Sample Output:
                
                Number of voters: 5
                Average age of voters: 38.20
                
                Count of voters by education level:
                Bachelors      2
                Masters        1
                PhD            1
                High School    1
                
                
                Percentage of voters preferring each political party:
                Democrat      40.0%
                Republican    40.0%
                Independent   20.0%
                
                
                Average age of voters for each political preference:
                Political_Preference
                Democrat      28.0
                Republican    54.0
                Independent   27.0
                
                
                Political preference distribution by education level:
                Education    Political_Preference
                Bachelors    Democrat               50.0%
                             Republican             50.0%
                High School  Republican            100.0%
                Masters      Democrat              100.0%
                PhD          Independent           100.0%
                
                
                Political preference distribution within each age group:
                Age_Group  Political_Preference
                18-25      Democrat               100.0%
                26-35      Democrat                50.0%
                            Independent            50.0%
                36-45      Republican             100.0%
                56-65      Republican             100.0%
                
                </pre>`;
        } else if (rollNo >= 41 && rollNo <= 50) {
            assignment = rollNo % 2 === 1 ?
                `<pre>
                Problem Statement: Analyzing Employee Performance and Satisfaction

                You are provided with a dataset containing information on employees at a multinational corporation.
                The dataset includes various details such as employee ID, department, years of experience, annual performance ratings,
                and job satisfaction levels. 
                Your task is to use Python and the Pandas library to perform data manipulation and analysis to understand the 
                factors influencing employee performance and satisfaction.
                
                Your Python script should output the following analyses:
                
                1. Basic Dataset Overview:
                   - Total number of employees in the dataset.
                   - Average years of experience across all employees.
                   - Distribution of employees across different departments.
                
                2. Performance Analysis:
                   - Average performance rating for each department.
                   - List of top 5 employees with the highest performance ratings.
                
                3. Satisfaction Analysis:
                   - Percentage of employees with each level of job satisfaction.
                
                4. Combined Analysis:
                   - Identify any trends between performance ratings and job satisfaction.
                   - Department with the highest average job satisfaction.
                
                
                Sample Input:
                
                The dataset ('employees.csv') is structured as follows:
                
                Employee_ID,Department,Years_of_Experience,Performance_Rating,Job_Satisfaction
                E001,Finance,5,3.5,High
                E002,IT,2,2.8,Medium
                E003,Marketing,8,4.2,High
                E004,HR,3,3.0,Low
                E005,Finance,10,4.5,Very High
                
                
                Sample Output:
                
                Total number of employees: 5
                Average years of experience: 5.60
                
                Distribution of employees by department:
                Finance      2
                IT           1
                Marketing    1
                HR           1
                
                
                Average performance rating by department:
                Department
                Finance      4.00
                HR           3.00
                IT           2.80
                Marketing    4.20
                
                
                Top 5 performers:
                  Employee_ID  Performance_Rating
                4        E005                 4.5
                2        E003                 4.2
                0        E001                 3.5
                3        E004                 3.0
                1        E002                 2.8
                
                Percentage of job satisfaction levels:
                High         40.0%
                Very High    20.0%
                Medium       20.0%
                Low          20.0%
                
                
                Average performance rating by job satisfaction level:
                Job_Satisfaction
                High         3.85
                Low          3.00
                Medium       2.80
                Very High    4.50
                
                
                Department with the highest average job satisfaction:
                Finance
                
                </pre>` :
                `<pre>
                Problem Statement: Analyzing Product Sales Data

                You are provided with a dataset containing sales data for a retail store. 
                The dataset includes details such as the product ID, category, number of units sold, and sales revenue. 
                Your task is to use Python and the Pandas library to perform data manipulation and analysis to understand 
                the sales performance across different product categories.
                
                Your Python script should output the following analyses:
                
                1. Basic Dataset Overview:
                   - Total number of products in the dataset.
                   - Total sales revenue.
                   - Average units sold per product.
                
                2. Sales Performance by Category:
                   - Total sales revenue by category.
                   - Average units sold by category.
                   - Number of products in each category.
                
                3. Top Performing Products:
                   - Top 3 products by units sold.
                   - Top 3 products by sales revenue.
                
                Sample Input:
                
                The dataset ('sales_data.csv') is structured as follows:
                
                Product_ID,Category,Units_Sold,Sales_Revenue
                P001,Electronics,150,45000
                P002,Clothing,200,30000
                P003,Home Decor,100,20000
                P004,Electronics,220,66000
                P005,Clothing,180,27000
                
                Sample Output:
                
                Total number of products: 5
                Total sales revenue: $188000
                Average units sold per product: 170.00
                
                Total sales revenue by category:
                Category
                Electronics    111000
                Clothing       57000
                Home Decor     20000
                
                Average units sold by category:
                Category
                Electronics    185.0
                Clothing       190.0
                Home Decor     100.0
                
                Number of products in each category:
                Electronics    2
                Clothing       2
                Home Decor     1
                
                Top 3 products by units sold:
                  Product_ID  Units_Sold
                3       P004          220
                1       P002          200
                4       P005          180
                
                Top 3 products by sales revenue:
                  Product_ID  Sales_Revenue
                3       P004          66000
                0       P001          45000
                1       P002          30000
                
                </pre>
                `;
        }

        const assignmentContainer = document.getElementById('assignmentContainer');
        assignmentContainer.innerHTML = `<p>${assignment}</p>`;
    } else {
        alert('Please enter a valid roll number between 1 and 50.');
    }
}
