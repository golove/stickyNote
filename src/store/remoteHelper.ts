
import ItemData from '@/model/ItemData';

class RemoteHelper {

    articles: Array<object>;
    comments: Array<object>;
    constructor() {
        this.articles = this.reqArticle();
        this.comments = this.reqComment();
    }

    signin(api: string, json: object) { }

    login(api: string, json: object) { }

    reqLoginCode(api: string) {

    }

    reqAvatar(api: string) { }

    updateUserInfo(api: string, json: object) { }

    reqArticle() {
        return []
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