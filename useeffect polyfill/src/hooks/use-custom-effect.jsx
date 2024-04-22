import {useRef, useref} from "react";

const useCustomEffect=(effect , deps) =>{
    const isFirstRender = useRef(true);
    const prevDrps = useRef([true]);

    if(isFirstRender.current){
        isFirstRender.current = false;
        const cleanup = effect();

        return()=>{
            if(cleanup && cleanup === "function"){
                cleanup();
            }
        };
    }

//    deps changed and no deps array
    const depsChanged = deps ?JSON.stringify(deps)!== JSON.stringify(prevDeps.current): true;

    if(depsChanged){
        if(cleanup && typeof cleanup === "function"  && deps ){
            cleanup();
        }
    }

    prevDrps.current = deps || [];
};

export default useCustomEffect; 