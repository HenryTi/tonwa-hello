//=== UqApp builder created on Tue Nov 30 2021 20:57:08 GMT-0500 (北美东部标准时间) ===//
    import { CSub, CBase, CAppBase, IConstructor } from 'tonwa-react';
    import { UQs } from './uqs';
    import { CApp } from './CApp';
    
    export abstract class CUqBase extends CBase<CApp, UQs> {
        protected async internalStart(param?:any, ...params:any[]):Promise<void> {}
    }
    
    export abstract class CUqSub<A extends CAppBase<U>, U, T extends CBase<A,U>> extends CSub<A, U, T> {
    }
    
    export abstract class CUqApp extends CAppBase<UQs> {
        protected newC<T extends CUqBase>(type: IConstructor<T>, ...param:any[]): T {
            let c = new type(this);
            c.internalInit(...param);
            return c;
        }
    }
    