import { get as _get } from 'lodash';
import { IAppState } from './model';

export class SessionStorageUtil {
    private static instance: SessionStorageUtil;
    private state: IAppState;

    private constructor() {
        this.state = JSON.parse(sessionStorage.getItem('state'));
    }

    /**
     * Get an instance of this class. The and the private constructor ensure there is just one instance of
     * this class in the application.
     */
    public static getInstance() {
        if (!SessionStorageUtil.instance) {
            SessionStorageUtil.instance = new SessionStorageUtil();
        }
        return SessionStorageUtil.instance;
    }

    /**
     * Get value by path in state object.
     * @param path Path of desired value in state, ex: 'auth.currentUser.shipperProfile.userAccountId'
     * @param defaultValue Value return in the case path is not found.
     */
    public get(path: string, defaultValue: any = null, useDefault = false) {
        return useDefault ? defaultValue : _get(this.state, path, defaultValue);
    }

    /**
     * Save supplied state object in sessionStorage.
     * @param stateObj
     */
    public saveState(stateObj: IAppState) {
        sessionStorage.setItem('state', JSON.stringify(stateObj));
        this.state = stateObj;
    }
}
