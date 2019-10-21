import ObjectId from 'bson-objectid'

export default function stringToObjectId (data: string) {
  if (!ObjectId.isValid(data)) throw new TypeError('This is not a valid ObjectId')
  return new ObjectId(data)
}
