import { doc, DocumentData, Firestore, getDoc } from 'firebase/firestore';
import React from 'react';

const useTasks = (db: Firestore, uid: string, collection: string) => {
  const [data, setData] = React.useState<DocumentData | null>([]);
  const [loading, setLoading] = React.useState(true);

  const getData = async () => {
    setLoading(true);
    const docRef = doc(db, collection, uid);
    const docSnap = await getDoc(docRef);
    const docData = docSnap.data();
    if (docSnap.exists() && docData) {
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
};

export default useTasks;
