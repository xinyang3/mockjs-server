require('./menu')

require('./chat/user')
require('./chat/window')

const { router } = require('./server')
// export { router } from './server'

module.exports.router = router;