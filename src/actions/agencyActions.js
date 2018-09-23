import {
    FETCH_AGENCY_INFO,
    FETCH_AGENCY_CLIENTS,
    CREATE_NEW_CLIENT,
    FETCH_ALL_CLIENTS
} from './types';
import { firebaseDb } from '../utils/firebase';

export function fetchAgencyInfo({ agencyId }) {
    let request = firebaseDb.ref(`agency/${agencyId}`).once('value').then(snapshot => snapshot.val());
    return {
        type: FETCH_AGENCY_INFO,
        payload: request        
    };
}

export function fetchAgencyClients({ agencyId }) {
    let request = firebaseDb.ref(`agencyClients/${agencyId}`).once('value').then(snapshot => snapshot.val());
    return {
        type: FETCH_AGENCY_CLIENTS,
        payload: request
    }
}

export function createNewClient(data) {
    let request = (data => {
        console.log('data', data);
        let clientId = firebaseDb.ref(`clients`).push().key;
        let updates = {};
        updates[`clients/${clientId}`] = data;
        updates[`agencyClients/${data.agencyId}/${clientId}`] = { 
            status: 'pending',
            ...data,
            appointmentDate: data.potentialAppointmentDate, 
            numItemsRequested: data.gearRequested.length
        }
        
        return firebaseDb.ref().update(updates)
    })(data);

    return {
        type: CREATE_NEW_CLIENT,
        payload: request
    }
}

export function fetchAllClients(data) {
    let request = firebaseDb.ref(`clients`).once('value').then(snapshot => snapshot.val());
    return {
        type: FETCH_ALL_CLIENTS,
        payload: request
    }
}
