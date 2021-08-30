import { NgModule } from '@angular/core';
import { AppShellRoutingModule } from './app-shell-routing.module';
import { AppShellComponent } from './app-shell.component';
import { DashboardComponent } from '../components/features/dashboard/dashboard.component';
import { HelpComponent } from '../components/features/help/help.component';
import { MyTeamComponent } from '../components/features/my-team/my-team.component';
import { DepartmentsComponent } from '../components/features/organization/departments/departments.component';
import { DesignationsComponent } from '../components/features/organization/designations/designations.component';
import { DownloadsComponent } from '../components/features/organization/downloads/downloads.component';
import { EmployeesComponent } from '../components/features/organization/employees/employees.component';
import { LeadersComponent } from '../components/features/organization/leaders/leaders.component';
import { OrganizationComponent } from '../components/features/organization/organization.component';
import { ToolsAndTechsComponent } from '../components/features/organization/tools-and-techs/tools-and-techs.component';
import { ActiveProjectsComponent } from '../components/features/projects/active-projects/active-projects.component';
import { MyProjectsComponent } from '../components/features/projects/my-projects/my-projects.component';
import { ProjectHistoryComponent } from '../components/features/projects/project-history/project-history.component';
import { ProjectsComponent } from '../components/features/projects/projects.component';
import { HeaderComponent } from '../components/layouts/header/header.component';
import { SubHeaderComponent } from '../components/layouts/sub-header/sub-header.component';
import { CommonModule } from '@angular/common';
import { LottieModule } from 'ngx-lottie';

export function playerFactory() {
  return import(/* webpackChunkName: 'lottie-web' */ 'lottie-web');
}

@NgModule({
  declarations: [
    AppShellComponent,
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
  imports: [
    CommonModule,
    AppShellRoutingModule,
    LottieModule.forRoot({
      player: playerFactory,
    }),
  ],
})
export class AppShellModule {}
