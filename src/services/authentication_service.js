import BaseService from '../base/base_service';

class AuthenticationService extends BaseService {
    init(args) {
        super.init(args);
    }

    /**
     * Getter secret token.
     *
     * @returns {string}
     */
    get secretToken() {
        return '123';
    }
}

export default AuthenticationService;