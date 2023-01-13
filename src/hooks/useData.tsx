import React from 'react';
import { doc, Firestore, getDoc, onSnapshot } from 'firebase/firestore';

function isData<T>(value: any, check: string): value is T {
  if (check in value) {
    return true;
  } else {
    return false;
  }
}

function useData<T extends UserInterface | UserTaskInterface>(
  db: Firestore,
  uid: string,
  collection: DatabaseEndpoints,
  check: string
) {
  const [data, setData] = React.useState<T | null>(null);
  const [loading, setLoading] = React.useState(true);
  const docRef = doc(db, collection, uid);

  const getData = async () => {
    setLoading(true);
    const docSnap = await getDoc(docRef);
    const docData = docSnap.data() as unknown;
    if (docSnap.exists() && isData<T>(docData, check)) {
      setData(docData);
    } else {
      setData(null);
    }
    setLoading(false);
  };

  React.useEffect(() => {
    getData();
  }, []);

  return { data, getData, loading };
}

export default useData;
