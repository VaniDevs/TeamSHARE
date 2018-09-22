import {
    REGISTER_FIREBASE_USER,
    LOGIN_FIREBASE_USER,
    LOGOUT_FIREBASE_USER,
    FETCH_FIREBASE_USER
} from './types';
import { firebaseAuth, firebaseEmailAuthProvider, firebaseDb, configType } from '../utils/firebase';

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


export function logoutUser(user) {
    const request = FireBaseTools.logoutUser(user);
    return {
        type: LOGOUT_FIREBASE_USER,
        payload: request,
    };
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
            let uid = data && data.uid ? data.uid : null,
                { type, email } = user,
                today = new Date();

            if(uid && type) {
                switch(type) {
                    case 'agency': {
                        let agencyId = firebaseDb.ref(`agency/`).push().key;
                        updates[`allUsers/${uid}`] = {
                            type,
                            agencyId,
                            createdOn: today,
                            status: 'active'
                        };
                        updates[`agency/${agencyId}`] = user.agency;
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
                            type,
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
                            type,
                            createdOn: new Date(),
                            status: 'active'
                        };
                        break;
                    }
                    case 'admin': {
                        // not implementing right now
                        updates[`allUsers/${uid}`] = {
                            type,
                            createdOn: new Date(),
                            status: 'active'
                        };
                        break; 
                    }
                    default: 
                        return;
                }
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
        return firebaseDb.ref(`/allUsers/${user.uid}`).once('value').then(snap => snap.val())
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
