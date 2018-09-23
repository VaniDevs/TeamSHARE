import {
    REGISTER_FIREBASE_USER,
    LOGIN_FIREBASE_USER,
    LOGOUT_FIREBASE_USER,
    FETCH_FIREBASE_USER,
    FETCH_USER_INFO
} from './types';
import { firebaseAuth, firebaseDb } from '../utils/firebase';

export function registerUser(user) {
    // console.log('you submitted register', user)
    const request = FireBaseTools.registerUser(user);    
    // const request = Promise.resolve(null)
    return {
        type: REGISTER_FIREBASE_USER,
        payload: request        
    };
}

export function loginUser(user) {
    const request = FireBaseTools.loginUser(user);
    return {
        type: LOGIN_FIREBASE_USER,
        payload: request,
    };
}


export function fetchUser() {
    const request = FireBaseTools.fetchUser();
    return {
        type: FETCH_FIREBASE_USER,
        payload: request,
    };
}


export function logoutUser() {
    const request = FireBaseTools.logoutUser();
    return {
        type: LOGOUT_FIREBASE_USER,
        payload: request,
    };
}


export function fetchUserInfo(uid) {
    let request = firebaseDb.ref(`/allUsers/${uid}`).once('value').then(snap => snap.val());
    return {
        type: FETCH_USER_INFO,
        payload: request
    }
}


const FireBaseTools = {
    /**
     * Register a user with email and password
     *
     * @param user
     * @returns {any|!firebase.Thenable.<*>|firebase.Thenable<any>}
     */
      registerUser: user =>
        firebaseAuth.createUserWithEmailAndPassword(user.email, user.password).then((data) => {
            let uid = data && data.user && data.user.uid ? data.user.uid : null,
                { type, email } = user,
                today = new Date(),
                name = "";
            let updates = {};
            console.log('data', data);
            console.log('user', user)
            if(uid && type) {
                switch(type) {
                    case 'agency': {
                        name = user.agent && user.agent.name ? user.agent.name : null;
                        let agencyId = firebaseDb.ref(`agency/`).push().key;
                        updates[`allUsers/${uid}`] = {
                            type: 'agencyEmp',
                            agencyId,
                            createdOn: today,
                            status: 'active'
                        };
                        updates[`agency/${agencyId}`] = {
                            address: user && user.agencyAddress ? user.agencyAddress : null, 
                            name: user && user.agencyName ? user.agencyName : null, 
                            phone: user && user.agencyPhone ? user.agencyPhone : null,
                            staff: {
                                [uid]: {
                                    phone: user && user.agent & user.agent.phone ? user.agent.phone : null,
                                    name,
                                    email,
                                    status: 'active'
                                }
                            },
                            status: 'active'
                        };
                        break;
                    }
                    case 'agencyEmp': {
                        updates[`agency/${user.agencyId}/staff/${uid}`] = {
                            name: user.name,
                            email: user.email,
                            phone: user.phone,
                            status: 'active',
                            createdOn: today
                        }
                        updates[`allUsers/${uid}`] = {
                            type: 'agencyEmp',
                            createdOn: new Date(),
                            status: 'active'
                        };
                        break;
                    }
                    case 'volunteer': {
                        updates[`volunteer/${uid}`] = {
                            name: user.name,
                            phone: user.phone,
                            availability: null
                        }
                        updates[`allUsers/${uid}`] = {
                            type: 'BGRVolunteer',
                            createdOn: new Date(),
                            status: 'active'
                        };
                        break;
                    }
                    case 'admin': {
                        // not implementing right now
                        updates[`allUsers/${uid}`] = {
                            type: 'BGRManager',
                            createdOn: new Date(),
                            status: 'active'
                        };
                        break; 
                   }
                    default: 
                        return null;
                }
                
                let currUser = firebaseAuth.currentUser;
                return currUser.updateProfile({ displayName: name }).then(() => {
                    return firebaseDb.ref().update(updates);
                }).then(() => { return { uid: data.uid, ...user } 
                }).catch(err => { console.log('error', err); return err; });
            }
        }
      ),
    /**
     * Log the user in using email and password
     *
     * @param user
     * @returns {any|!firebase.Thenable.<*>|firebase.Thenable<any>}
     */
      loginUser: user => firebaseAuth.signInWithEmailAndPassword(user.email, user.password)
      .then(userInfo => {
        return userInfo;
      }).catch(error => ({
          errorCode: error.code,
          errorMessage: error.message,
      })),
    /**
     * Retrieve the current user (Promise)
     * @returns {Promise}
     */

    fetchUser: () => new Promise((resolve, reject) => {
        const unsub = firebaseAuth.onAuthStateChanged((user) => {
            unsub();
            resolve(user);
        }, (error) => {
            reject(error);
        });
    }).then(user => {
        return user;
    }),

   /**
   * Sign the user out
   *
   * @returns {!firebase.Promise.<*>|firebase.Thenable<any>|firebase.Promise<any>|!firebase.Thenable.<*>}
   */
    logoutUser: () => firebaseAuth.signOut().then(() => ({
        success: 1,
        message: 'logout',
    })),

}
