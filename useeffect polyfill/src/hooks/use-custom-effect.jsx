import {useRef, useref} from "react";

const useCustomEffect=(effect , deps) =>{
    const isFirstRender = useRef(true);
    const prevDrps = useRef([true]);

    if(isFirstRender.current){
        isFirstRender.current = false;
        effect();
        return;
    }

//    deps changed and no deps array
    const depsChanged = deps ?JSON.stringify(deps)!== JSON.stringify(prevDeps.current): true;

    if(depsChanged){
        effect();
    }

    prevDrps.current = deps || [];
};

export default useCustomEffect;