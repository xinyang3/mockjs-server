require('./menu')

require('./chat/user')
require('./chat/window')
require('./chat/version')

const { router } = require('./server')
// export { router } from './server'

module.exports.router = router;