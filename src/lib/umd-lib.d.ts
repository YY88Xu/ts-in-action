declare namespace umdLib {
    const version: string;
    function doSomething(): void;
 }
 export as namespace umdLib // 专门为umd库准备的语句，不可缺少
 export = umdLib