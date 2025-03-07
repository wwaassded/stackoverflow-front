import { defineStore } from "pinia";


const useUtilStore = defineStore('util', {
    state() {
        return {
            id: -1,
            status: '',
            sessionId: '',
        }
    },
    actions: {
        getSessionIdAndUserInfo(websiteId: string, status: string) {
            this.id = Number.parseInt(websiteId)
            this.status = status
            const cookies = document.cookie.split(';')
            for (let cookie of cookies) {
                const [name, value] = cookie.trim().split('=')
                if (name === 'sessionId') {
                    this.sessionId = value
                    break
                }
            }
        }
    },
})

export default useUtilStore