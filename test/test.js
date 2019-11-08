const assert = require('assert');
const SimpleID = require('../index');
const casual = require('casual');
const network = "layer2";
const simple = new SimpleID({
  appOrigin: "https://www.simpleid.xyz/whitepaper",
  scopes: ['store_write', 'publish_data'],
  apiKey: "123456",
  devId: "justin.email.email@email.com",
  appName: "SimpleID Interactive Whitepaper",
  development: true,
  network,
  localRPCServer: 'http://localhost:7545'
});
const newEmail = casual.email; 

describe('Basic ping test', function() {
  this.timeout(20000);
  it('Attempt to get it working', async function() {
    assert(typeof simple, "object");
  })
});

describe('Auth - Sign Up', function() {
  this.timeout(20000);
  it('Signs a new user up and sends an auth token', async function() {
    const payload = { email: newEmail };
    const signup = await simple.authenticate(payload);
    
    assert(signup.message, "Approval email sent");
  });
});