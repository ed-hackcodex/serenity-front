import supabaseClient from '../utils/supabaseClient'

class User {
    static async create(uuid) {
        try {
            const { data, error } = await supabaseClient
                .from('users')
                .insert([{ uuid }])
            if (error) throw error
            return data
        } catch (error) {
            throw { error }
        }
    }
}

export default User