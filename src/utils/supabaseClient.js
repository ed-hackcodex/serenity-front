import { createClient } from '@supabase/supabase-js'

import config from '../config'

export default createClient(config.supabase.url, config.supabase.key)