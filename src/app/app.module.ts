import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { HeaderComponent } from './components/layouts/header/header.component';
import { SubHeaderComponent } from './components/layouts/sub-header/sub-header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    MyTeamComponent,
    ProjectsComponent,
    MyProjectsComponent,
    ProjectHistoryComponent,
    OrganizationComponent,
    ActiveProjectsComponent,
    DesignationsComponent,
    DepartmentsComponent,
    ToolsAndTechsComponent,
    EmployeesComponent,
    LeadersComponent,
    DownloadsComponent,
    HelpComponent,
    HeaderComponent,
    SubHeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
