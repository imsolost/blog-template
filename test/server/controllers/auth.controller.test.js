import { expect } from 'chai';

import authController from './../../../src/server/controllers/auth.controller';

describe('auth.controller', () => {
    it('should exists', () => expect(authController).to.be.defined);
});
