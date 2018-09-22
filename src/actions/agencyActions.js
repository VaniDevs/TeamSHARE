import {
    FETCH_AGENCY_INFO,
    FETCH_AGENCY_CLIENTS
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