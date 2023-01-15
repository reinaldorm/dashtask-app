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

  const readData = async () => {
    const snapshot = await getDoc(docRef);
    const data = snapshot.data() as unknown;

    return data;
  };

  const getData = async () => {
    setLoading(true);

    const data = await readData();

    if (isData(data)) {
      setData(data);
      setLoading(false);
      return data;
    } else {
      setLoading(false);
      setData(null);
      return null;
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  return { data, getData, loading };
}

export default useData;
