import React from 'react';
import { doc, Firestore, getDoc } from 'firebase/firestore';

function isData(value: any): value is UserDataInterface {
  if ('username' in value && 'tasks' in value) {
    return true;
  } else {
    return false;
  }
}

function useData(db: Firestore, uid: string) {
  const [data, setData] = React.useState<UserDataInterface | null>(null);
  const [loading, setLoading] = React.useState(true);
  const docRef = doc(db, 'users', uid);

  const getData = async () => {
    setLoading(true);

    const docSnap = await getDoc(docRef);
    const docData = docSnap.data() as unknown;

    if (isData(docData)) setData(docData);
    else setData(null);

    setLoading(false);
  };

  React.useEffect(() => {
    getData();
  }, []);

  return { data, getData, loading };
}

export default useData;
