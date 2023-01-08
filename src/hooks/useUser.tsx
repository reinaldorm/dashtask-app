import React from 'react';
import { doc, Firestore, getDoc } from 'firebase/firestore';

const isUser = (value: any): value is UserInterface => {
  if ('username' in value) {
    return true;
  } else {
    return false;
  }
};

function useData(db: Firestore, uid: string) {
  const [data, setData] = React.useState<UserInterface | null>(null);
  const [loading, setLoading] = React.useState(true);

  const getData = async () => {
    setLoading(true);
    const docRef = doc(db, 'users', uid);
    const docSnap = await getDoc(docRef);
    const docData = docSnap.data() as unknown;
    if (docSnap.exists() && isUser(docData)) {
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
