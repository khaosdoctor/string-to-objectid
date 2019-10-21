import { describe, it } from 'mocha'
import stringToObjectId from '../src'
import { ObjectId } from 'bson'
import assert from 'assert'

describe('Main tests', () => {
  it('Should throw an error when string is not valid OID', () => {
    assert.throws(() => stringToObjectId('not a valid ID'), TypeError, 'This is not a valid ObjectId')
  })
  it('Should return a new OID', () => {
    const string = new ObjectId().toHexString()
    const OID = stringToObjectId(string)
    assert.ok(OID instanceof ObjectId)
  })
})

