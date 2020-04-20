import Category from "./CateEnum";

class ItemData {
    id!: number;
    categoryId!: Category;
    title!: string;
    content!: string;
    createTime!: string;

    constructor(id: number = -1, categoryId: Category = -1, title: string = "", content: string = "") {
        this.id = id;
        this.categoryId = categoryId;
        this.title = title;
        this.content = content;
        this.createTime = this.timeToString(Date.now());
    }
    timeToString(time: number): string {
        //将时间戳转换成时间对象
        let T = new Date(time);
        //将时间对象使用getXXX方法一次获取年月日时分秒;然后拼接成想要的格式
        let timeStr = `${T.getFullYear()}-${T.getMonth() + 1}-${T.getDate()} ${T.getHours()}:${T.getMinutes()}`
        return timeStr
    }
}

export default ItemData;