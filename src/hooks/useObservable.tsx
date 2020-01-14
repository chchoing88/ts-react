import {useState, useEffect} from 'react'
import * as Rx from 'rxjs';

const useObservable = (observable: Rx.Observable<any>) => {
  const [state, setState] = useState();

  useEffect(() => {
    const sub = observable.subscribe(setState);
    return () => sub.unsubscribe();
  }, [observable]);

  return state;
};

// 종료 시점, pipe, 

export default useObservable