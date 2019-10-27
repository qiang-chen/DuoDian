import { observable, action } from 'mobx';

class List {
    @observable listData: object[] = [];
    @action getList(list: any[]) {
        this.listData = list;
        // Object.defineProperty(this.listData, '', {
        //     get: function(target: any, property: any, receiver: any) {
        //         console.log(target);
        //     }
        // });
    }
}

export default new List();
