import supabaseClient from '../utils/supabaseClient'

class Conversation {
    static async get(messages = []) {
        try {
            const { data, error } = await supabaseClient.functions.invoke('questionary', {
                body: { messages },
            })
            if (error) throw error
            return data
        } catch (error) {
            throw { error }
        }
    }
}

export default Conversation