import { ObjectId } from 'bson'

export default function stringToObjectId (data: string) {
  if (!ObjectId.isValid(data)) throw new TypeError(`"${data}" is not a valid ObjectId`)
  return new ObjectId(data)
}

module.exports = stringToObjectId
