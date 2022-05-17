import { Subject } from "rxjs";
import { User } from "../../models/User.models";

export class UserService {
    private users: User[] = [
        {
            firstName: 'James',
            lastName: 'Smith',
            email: 'james@smith.com',
            drinkPreference: 'ice tea',
            hobbies: [
                'coder',
                'la dégustation de pizza'
            ]
        }
    ];
    userSubject = new Subject<User[]>();

    emitUsers() {
        this.userSubject.next( this.users.slice() );
    }
    
    addUser(user: User) {
        this.users.push(user);
        this.emitUsers();
    }
}