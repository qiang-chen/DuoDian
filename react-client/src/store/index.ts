//统一引入.ts后缀的名字

import Login from "./modules/login";
import List from "./modules/list";
// const context = require['context']('./modules', false, /\.ts$/);

// let obj = {};
// context.keys().forEach((key: any) => {
//     obj[key.slice(2).slice(0, -3)] = new (context(key)).default();
// });

// export default obj;

export default {
    LoginMob: Login,
    List
};
