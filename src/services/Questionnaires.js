import supabaseClient from '../utils/supabaseClient'

class Questionnaires {
    static async get() {
        try {
            let { data: questionnaires, error } = await supabaseClient
                .from('questionnaires')
                .select(`
                    *,
                    questions (*)
                `)
            if (error) throw error
            return questionnaires
        } catch (error) {
            throw { error }
        }
    }
}

export default Questionnaires