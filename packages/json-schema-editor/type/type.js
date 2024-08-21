import _string from './string'
import _integer from './integer'
import _number from './number'
import _boolean from './boolean'
import _array from './array'
import _object from './object'
import _any from './any'

const TYPE_NAME = ['string', 'integer', 'number', 'boolean', 'array', 'object', 'any']

const LESS_TYPE_NAME = ['string', 'integer', 'number', 'boolean', 'array']

const TYPE = {
  'string': _string,
  'integer': _integer,
  'number': _number,
  'boolean': _boolean,
  'array': _array,
  'object': _object,
  'any': _any
}
export { TYPE, TYPE_NAME, LESS_TYPE_NAME }
