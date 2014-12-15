'use strict';

module.exports = {
  deleteAll: "DROP TABLE issues; DROP TABLE projects; DROP TABLE organizations;",
  organizations: "CREATE TABLE organizations ( orgId int NOT NULL AUTO_INCREMENT, name varchar(255), description varchar(255), PRIMARY KEY(orgId) );",
  projects: "CREATE TABLE projects ( projectId int NOT NULL AUTO_INCREMENT, title varchar(255), description varchar(255), orgId int, PRIMARY KEY (projectId), FOREIGN KEY (orgId) REFERENCES organizations(orgId) );",
  issues: "CREATE TABLE issues (issueId int NOT NULL AUTO_INCREMENT, title varchar(255), description varchar(255), label varchar(255), creator varchar(255), projectId int, PRIMARY KEY (issueId), FOREIGN KEY (projectId) REFERENCES projects(projectId) );"
}