import {Md5} from "ts-md5";


function parseCookies(cookieString: string) {
    const cookies = new Map<string, string>()
    cookieString.split(';').forEach(cookie => {
        const [k, v] = cookie.split('=').map(c => c.trim())
        cookies.set(k, v)
    })
    return cookies
}

//对用户的密码进行md5加密
function md5(raw: string) {
    return Md5.hashStr(raw)
}

const lines_per_page = 4
const github_third_authority_root = 'https://github.com/login/oauth/authorize?scope=user:email&client_id='
const github_third_authority_client_id = 'Ov23lieK9SUhmawxB2jl'

export {parseCookies, md5, lines_per_page, github_third_authority_root, github_third_authority_client_id}


