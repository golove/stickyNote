import DataHelper from "./DataHelper";
import ItemData from '@/model/ItemData';
import Category from '@/model/CateEnum';

class ActionHelper {
    // 1.负责数据处理
    dataHelper: DataHelper = new DataHelper('demoData', 'id');
    demoList: Array<ItemData>;
    // 2/负责业务处理

    constructor() {
        // 读取本地数据保存到demoList中
        this.demoList = this.readData();

    }

    readData(): Array<ItemData> {
        let arrObj = this.dataHelper.read();
        // 将Obj数组转换成ItemData数组;
        let arr = arrObj.map((e: any) => {
            let item: ItemData = new ItemData();
            item.id = e.id;
            item.categoryId = e.categoryId;
            item.title = e.title;
            item.createTime = e.createTime;
            item.content = e.content;
            return item
        })
        return arr
    }


    // 3.新增笔记
    addData(item: ItemData): number {
        this.demoList.push(item);
        item.id = this.dataHelper.add(item);
        return item.id
    }
    // 4.修改笔记
    editData(item: ItemData): void {
        let editItem: ItemData | undefined = this.demoList.find((e: any) => {
            return item.id == e.id
        })

        if (editItem) {
            editItem.categoryId = item.categoryId;
            editItem.title = item.title;
            editItem.content = item.content;
            this.dataHelper.save(this.demoList)
        }
    }

    //5.删除笔记
    remove(id: number): void {
        let index: number = this.demoList.findIndex((e: any) => {
            return e.id === id
        })

        if (index > -1) {
            this.demoList.splice(index, 1);
            this.dataHelper.save(this.demoList);
        }
    }

    getCategory(id: Category): string {
        return ['工作', '生活', '学习'][id]
    }
}

export default ActionHelper;