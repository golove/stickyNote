
import ItemData from '@/model/ItemData';
import axios from 'axios'

class RemoteHelper {

    articles: Array<any>;
    constructor(api: string = "http://39.105.168.171:9600/myblog", json: object = {}) {
        this.articles = this.reqArticle(api, json);
    }

    async makeAxios(api: string, json: object): Array<any> {
        let res = await axios.post(api, json)
        let data: Array<any> = res.data
        return data

    }

    signin(api: string, json: object) { }

    login(api: string, json: object) { }

    reqLoginCode(api: string) {

    }

    reqAvatar(api: string) { }

    updateUserInfo(api: string, json: object) { }

    reqArticle(api: string, json: object): Array<object> {
        let res: Array<any> = this.makeAxios(api, json)
        return res
    }

    submitArticle(api: string, json: object) { }

    updateArticle(api: string, json: object) { }

    removeArticle(api: string, json: object) { }

    reqComment() {
        return []
    }

    submitComment(api: string, json: object) { }

    removeComment(api: string, json: object) { }




}


export default RemoteHelper;