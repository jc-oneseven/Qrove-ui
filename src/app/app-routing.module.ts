import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './components/features/dashboard/dashboard.component';
import { HelpComponent } from './components/features/help/help.component';
import { MyTeamComponent } from './components/features/my-team/my-team.component';
import { DepartmentsComponent } from './components/features/organization/departments/departments.component';
import { DesignationsComponent } from './components/features/organization/designations/designations.component';
import { DownloadsComponent } from './components/features/organization/downloads/downloads.component';
import { EmployeesComponent } from './components/features/organization/employees/employees.component';
import { LeadersComponent } from './components/features/organization/leaders/leaders.component';
import { OrganizationComponent } from './components/features/organization/organization.component';
import { ToolsAndTechsComponent } from './components/features/organization/tools-and-techs/tools-and-techs.component';
import { ActiveProjectsComponent } from './components/features/projects/active-projects/active-projects.component';
import { MyProjectsComponent } from './components/features/projects/my-projects/my-projects.component';
import { ProjectHistoryComponent } from './components/features/projects/project-history/project-history.component';
import { ProjectsComponent } from './components/features/projects/projects.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'my-teams', component: MyTeamComponent },
  {
    path: 'projects',
    component: ProjectsComponent,
    children: [
      { path: 'my-projects', component: MyProjectsComponent },
      { path: 'active-projects', component: ActiveProjectsComponent },
      { path: 'project-history', component: ProjectHistoryComponent },
    ],
  },
  {
    path: 'organization',
    component: OrganizationComponent,
    children: [
      { path: 'designations', component: DesignationsComponent },
      { path: 'departments', component: DepartmentsComponent },
      { path: 'tools-and-techs', component: ToolsAndTechsComponent },
      { path: 'employees', component: EmployeesComponent },
      { path: 'leaders', component: LeadersComponent },
      { path: 'downloads', component: DownloadsComponent },
    ],
  },
  { path: 'help', component: HelpComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
