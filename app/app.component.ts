import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {NavbarComponent} from './navbar.component'
import {UsersComponent} from './users/users.component'
import {PostsComponent} from './posts/posts.component'
import {HomeComponent} from './home.component'
import {AddUserComponent} from './users/add-user.component'
import {WorkoutsHomeComponent} from './workouts/workouts-home.component'
import {WorkoutComponent} from './workouts/workout.component'

@RouteConfig([
    {path: '/users', name: 'Users', component: UsersComponent},
    {path: '/posts', name: 'Posts', component: PostsComponent},
    {path: '/users/new', name: "AddUser", component: AddUserComponent},
    {path: '/', name: 'Home', component: HomeComponent},
    {path: '/workouts', name: 'WorkoutsHome', component: WorkoutsHomeComponent},
    {path: '/workout', name: 'Workout', component: WorkoutComponent},
    {path: '/*other', name: 'Other', redirectTo: ['Home']}
])
@Component({
    selector: 'my-app',
    templateUrl: '/app/app.component.html',
    directives: [ROUTER_DIRECTIVES, NavbarComponent]
})
export class AppComponent {}