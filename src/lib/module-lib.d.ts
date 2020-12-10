declare function moduleLib(options: Options): void;
interface Options {
   [key: string]: any,
}
declare namespace moduleLib{
   const version: string;
   function doSomething(): void;
}
export = moduleLib; // 这样写兼容性更好