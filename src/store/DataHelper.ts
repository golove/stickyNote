import ItemData from '@/model/ItemData';


class DataHelper {

    dataKey: string;
    primaryKey: string;
    constructor(dataKey: string, primaryKey: string) {
        this.dataKey = dataKey;
        this.primaryKey = primaryKey;
    }

    read(): any {
        // 根据dataKey读取本地数据
        let arrstr: string | null = localStorage.getItem(this.dataKey);
        // 将读取的json数组字符串转换成数组对象
        let arrdata: any = [];
        if (arrstr !== null) {
            arrdata = JSON.parse(arrstr);
        }
        // 将数组对象返回
        return arrdata;
    }

    save(arr: Array<object>): void {
        // 将数组对象转换成json数组字符串
        let str: string = JSON.stringify(arr);
        // 将转换成json数组字符串存入localStoage中
        localStorage.setItem(this.dataKey, str);

    }

    add(conStr: ItemData): number {
        // 1.读取本地现有数据
        let arr: any = this.read();
        // 2.创建一个评论对象,并设置相应属性
        let obj: object = {
            title: conStr.title,
            categoryId: conStr.categoryId,
            content: conStr.content,
            createTime: conStr.createTime,
            [this.primaryKey]: arr.length > 0 ? arr[arr.length - 1][this.primaryKey] + 1 : 1
        }
        // 3.自动生成主键
        let newId = arr.length > 0 ? arr[arr.length - 1][this.primaryKey] + 1 : 1;
        // obj[this.primaryKey] = newId;
        // 4.将生成了主建的评论对象追加到数组中
        arr.push(obj);

        this.save(arr);

        return newId;
    }

    remove(id: number | string): boolean {
        let arr: any = this.read();

        let index = arr.findIndex((e: any) => {
            return e[this.primaryKey] == id;
        })
        if (index > -1) {
            arr.splice(index, 1);
            this.save(arr);
            return true;
        }
        return false;
    }

}

export default DataHelper;