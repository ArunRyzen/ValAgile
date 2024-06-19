const RequirementUS = ( req ,res ,db) => {
    const useremail = req.session.email;
    var proj = req.body.project;
    var vers = req.body.version;
    console.log("email:",useremail)
    var sql;
    var sql1;
    var sql2;
    var project;
    var version;
    if (req.method == "GET") {
        console.log("refresh panna Get")
        console.log(useremail)
        sql = "select `US Status` as Status, count(`US ID`) as Counts from `09 userstory to epic` group by `US Status`";
        sql1 = "SELECT GROUP_CONCAT(DISTINCT 'SUM(`US Status` = ''', `US Status`, ''') AS `', `US Status`, '`') INTO @sql FROM `09 userstory to epic`; SET @sql =  CONCAT('SELECT `US Assignee` as Assignee, ', @sql, ' FROM `09 userstory to epic` GROUP BY `US Assignee`'); select @sql; PREPARE stmt FROM @sql; EXECUTE stmt; DEALLOCATE PREPARE stmt;";
        sql2 = "SELECT GROUP_CONCAT(DISTINCT 'SUM(`US Status` = ''', `US Status`, ''') AS `', `US Status`, '`') INTO @sql FROM `09 userstory to epic`; SET @sql =  CONCAT('SELECT `EPIC Name` as Epic, ', @sql, ' FROM `09 userstory to epic` GROUP BY `EPIC Name`'); select @sql; PREPARE stmt FROM @sql; EXECUTE stmt; DEALLOCATE PREPARE stmt;";   
        project = `select ProjectCategory as Project  from project_to_users where users = '${useremail}'`;
        version =`select ReleaseId as Version from project_to_users where users = '${useremail}'`;
        db.query(sql, (err, data) => {
            const responseData1 = [
                ["Task", "values"],
                ...data.map(item => [item.Status, item.Counts])
              ];    
              console.log("responseData1:",responseData1)
         db.query(sql1, (err, data) => {
            console.log("data................:",data)
            var datas = data[4]
            console.log("data................:",datas)
            const responseData2 = {
                series: [
                    ["Name", "0 To Do", "Done", "1 In Progress"], // First row
                    ...datas.map((row, index) => {
                        const values = Object.values(row);
                        if (index >= 0) {
                            for (let i = 1; i < values.length; i++) {
                                if (!isNaN(values[i])) {
                                    values[i] = parseInt(values[i], 10);
                                }
                            }
                        }
                        return values;
                    })
                ]
            };
            console.log("responseData2:",responseData2)
            db.query(sql2, (err, data) => {
                var datas = data[4]
                const responseData3 = {
                    series: [
                        ["Name", "0 To Do", "Done", "1 In Progress"], // First row
                        ...datas.map((row, index) => {
                            const values = Object.values(row);
                            if (index >= 0) {
                                for (let i = 1; i < values.length; i++) {
                                    if (!isNaN(values[i])) {
                                        values[i] = parseInt(values[i], 10);
                                    }
                                }
                            }
                            return values;
                        })
                    ]
                };
                console.log("responseData3:",responseData3)
            db.query(project, (err, data) => {
                    console.log("projectdata:",data)
                    const responseData4 = data.map(obj => obj.Project);
                    console.log("responseData4:",responseData4)
    
            db.query(version, (err, data) => {
                console.log("versiondata:",data)
                const responsedata5 = data.map(obj => obj.Version);
                console.log("responseData5:", responsedata5);
    
        const combinedResponse = { responseData1, responseData2 ,responseData3,responseData4,responsedata5};
        res.json(combinedResponse);.0
    })
    })
    })
    })
    });    
    }
    else{
            console.log("POST Method:",proj,vers)
            if (proj == 'All' && vers == 'All') {
                console.log("all..........all",proj,vers)
                project = `select ProjectCategory as Project  from project_to_users where users = '${useremail}'`;
                version =`select ReleaseId as Version from project_to_users where users = '${useremail}'`;
                sql = "select `US Status` as Status, count(`US ID`) as Counts from `09 userstory to epic` group by `US Status`";
                sql1 = "SELECT GROUP_CONCAT(DISTINCT 'SUM(`US Status` = ''', `US Status`, ''') AS `', `US Status`, '`') INTO @sql FROM `09 userstory to epic`; SET @sql =  CONCAT('SELECT `US Assignee` as Assignee, ', @sql, ' FROM `09 userstory to epic` GROUP BY `US Assignee`'); select @sql; PREPARE stmt FROM @sql; EXECUTE stmt; DEALLOCATE PREPARE stmt;";
                sql2 = "SELECT GROUP_CONCAT(DISTINCT 'SUM(`US Status` = ''', `US Status`, ''') AS `', `US Status`, '`') INTO @sql FROM `09 userstory to epic`; SET @sql =  CONCAT('SELECT `EPIC Name` as Epic, ', @sql, ' FROM `09 userstory to epic` GROUP BY `EPIC Name`'); select @sql; PREPARE stmt FROM @sql; EXECUTE stmt; DEALLOCATE PREPARE stmt;";
              }
              else if (proj != 'All' && vers == 'All') {
                console.log("proj..........all",proj,vers)
                project = `select ProjectCategory as Project  from project_to_users where users = '${useremail}'`;
                version =`select ReleaseId as Version from project_to_users where users = '${useremail}'`;
                sql = "select `US Status` as Status, count(`US ID`) as Counts from `09 userstory to epic` where `Epic ProjectName` ='" + proj + "' group by `US Status`";
                sql1 = "SELECT GROUP_CONCAT(DISTINCT 'SUM(`US Status` = ''', `US Status`, ''') AS `', `US Status`, '`') INTO @sql FROM `09 userstory to epic`; SET @sql =  CONCAT('SELECT `US Assignee` as Assignee, ', @sql, ' FROM `09 userstory to epic` where `Epic ProjectName` =" + "\"" + proj + "\"" + " GROUP BY `US Assignee`'); select @sql; PREPARE stmt FROM @sql; EXECUTE stmt; DEALLOCATE PREPARE stmt;";
                sql2 = "SELECT GROUP_CONCAT(DISTINCT 'SUM(`US Status` = ''', `US Status`, ''') AS `', `US Status`, '`') INTO @sql FROM `09 userstory to epic`; SET @sql =  CONCAT('SELECT `EPIC Name` as Epic, ', @sql, ' FROM `09 userstory to epic` where `Epic ProjectName` =" + "\"" + proj + "\"" + " GROUP BY `EPIC Name`'); select @sql; PREPARE stmt FROM @sql; EXECUTE stmt; DEALLOCATE PREPARE stmt;";
              }
              else if (proj == 'All' && vers != 'All') {
                console.log("all..........vers",proj,vers)
                project = `select ProjectCategory as Project  from project_to_users where users = '${useremail}'`;
                version =`select ReleaseId as Version from project_to_users where users = '${useremail}'`;
                sql = "select `US Status` as Status, count(`US ID`) as Counts from `09 userstory to epic` where `Epic ReleaseID` ='" + vers + "' group by `US Status`";
                sql1 = "SELECT GROUP_CONCAT(DISTINCT 'SUM(`US Status` = ''', `US Status`, ''') AS `', `US Status`, '`') INTO @sql FROM `09 userstory to epic`; SET @sql =  CONCAT('SELECT `US Assignee` as Assignee, ', @sql, ' FROM `09 userstory to epic` where `Epic ReleaseID` =" + "\"" + vers + "\"" + " GROUP BY `US Assignee`'); select @sql; PREPARE stmt FROM @sql; EXECUTE stmt; DEALLOCATE PREPARE stmt;";
                sql2 = "SELECT GROUP_CONCAT(DISTINCT 'SUM(`US Status` = ''', `US Status`, ''') AS `', `US Status`, '`') INTO @sql FROM `09 userstory to epic`; SET @sql =  CONCAT('SELECT `EPIC Name` as Epic, ', @sql, ' FROM `09 userstory to epic` where `Epic ReleaseID` =" + "\"" + vers + "\"" + " GROUP BY `EPIC Name`'); select @sql; PREPARE stmt FROM @sql; EXECUTE stmt; DEALLOCATE PREPARE stmt;";
              }
              else if (proj != 'All' && vers != 'All') {
                console.log("proj..........vers",proj,vers)
                project = `select ProjectCategory as Project  from project_to_users where users = '${useremail}'`;
                version =`select ReleaseId as Version from project_to_users where users = '${useremail}'`;
                sql = "select `US Status` as Status, count(`US ID`) as Counts from `09 userstory to epic` where `Epic ProjectName` ='" + proj + "' and `Epic ReleaseID` ='" + vers + "' group by `US Status`";
                sql1 = "SELECT GROUP_CONCAT(DISTINCT 'SUM(`US Status` = ''', `US Status`, ''') AS `', `US Status`, '`') INTO @sql FROM `09 userstory to epic`; SET @sql =  CONCAT('SELECT `US Assignee` as Assignee, ', @sql, ' FROM `09 userstory to epic` where `Epic ProjectName` =" + "\"" + proj + "\"" + " and `Epic ReleaseID` =" + "\"" + vers + "\"" + " GROUP BY `US Assignee`'); select @sql; PREPARE stmt FROM @sql; EXECUTE stmt; DEALLOCATE PREPARE stmt;";
                sql2 = "SELECT GROUP_CONCAT(DISTINCT 'SUM(`US Status` = ''', `US Status`, ''') AS `', `US Status`, '`') INTO @sql FROM `09 userstory to epic`; SET @sql =  CONCAT('SELECT `EPIC Name` as Epic, ', @sql, ' FROM `09 userstory to epic` where `Epic ProjectName` =" + "\"" + proj + "\"" + " and `Epic ReleaseID` =" + "\"" + vers + "\"" + " GROUP BY `EPIC Name`'); select @sql; PREPARE stmt FROM @sql; EXECUTE stmt; DEALLOCATE PREPARE stmt;";
              }
              else {
                console.log("we have to find........",proj,vers)
                project = `select ProjectCategory as Project  from project_to_users where users = '${useremail}'`;
                version =`select ReleaseId as Version from project_to_users where users = '${useremail}'`;
                sql = "select `US Status` as Status, count(`US ID`) as Counts from `09 userstory to epic` group by `US Status`";
                sql1 = "SELECT GROUP_CONCAT(DISTINCT 'SUM(`US Status` = ''', `US Status`, ''') AS `', `US Status`, '`') INTO @sql FROM `09 userstory to epic`; SET @sql =  CONCAT('SELECT `US Assignee` as Assignee, ', @sql, ' FROM `09 userstory to epic` GROUP BY `US Assignee`'); select @sql; PREPARE stmt FROM @sql; EXECUTE stmt; DEALLOCATE PREPARE stmt;";
                sql2 = "SELECT GROUP_CONCAT(DISTINCT 'SUM(`US Status` = ''', `US Status`, ''') AS `', `US Status`, '`') INTO @sql FROM `09 userstory to epic`; SET @sql =  CONCAT('SELECT `EPIC Name` as Epic, ', @sql, ' FROM `09 userstory to epic` GROUP BY `EPIC Name`'); select @sql; PREPARE stmt FROM @sql; EXECUTE stmt; DEALLOCATE PREPARE stmt;";
          
              }    
        db.query(sql, (err, data) => {
            const responseData1 = [
                ["Task", "values"],
                ...data.map(item => [item.Status, item.Counts])
              ];    
              console.log("responseData1:",responseData1)
         db.query(sql1, (err, data) => {
            console.log("data................:",data)
            var datas = data[4]
            console.log("data................:",datas)
            const responseData2 = {
                series: [
                    ["Name", "0 To Do", "Done", "1 In Progress"],
                    ...datas.map((row, index) => {
                        const values = Object.values(row);
                        console.log(",index,row,values",index,row,values);
                        if (index >= 0) {
                            for (let i = 1; i < values.length; i++) {
                                if (!isNaN(values[i])) {
                                    values[i] = parseInt(values[i], 10);
                                }
                            }
                        }
                        return values;
                    })
                ]
            };
            console.log("responseData2:",responseData2)
            db.query(sql2, (err, data) => {
                var datas = data[4]
                const responseData3 = {
                    series: [
                        ["Name", "0 To Do", "Done", "1 In Progress"],
                        ...datas.map((row, index) => {
                            const values = Object.values(row);
                            console.log(",index,row,values",index,row,values);
                            if (index >= 0) {
                                for (let i = 1; i < values.length; i++) {
                                    if (!isNaN(values[i])) {
                                        values[i] = parseInt(values[i], 10);
                                    }
                                }
                            }
                            return values;
                        })
                    ]
                };
                console.log("responseData3:",responseData3)
            db.query(project, (err, data) => {
                    console.log("project:",data)
                    const responseData4 = data.map(obj => obj.Project);
                    console.log("responseData4:",responseData4)
    
            db.query(version, (err, data) => {
                console.log("project:",data)
                const responsedata5 = data.map(obj => obj.Version);
                console.log("responseData4:", responsedata5);
    
        const combinedResponse = { responseData1, responseData2 ,responseData3,responseData4,responsedata5};
        res.json(combinedResponse);
    })
    })
    })
    })
    });
    }
};
module.exports = RequirementUS;
