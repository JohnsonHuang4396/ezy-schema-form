import _Test from './Test.vue'
import { withInstall } from '../../utils'

export const Test = withInstall<typeof _Test>(_Test)

export default Test
