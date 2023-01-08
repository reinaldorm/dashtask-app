// import React from 'react';
// import { doc, DocumentData, Firestore, getDoc } from 'firebase/firestore';

// const isData = {
//   user: (value: any): value is UserInterface => {
//     if ('username' in value) {
//       return true;
//     } else {
//       return false;
//     }
//   },
//   tasks: (value: any): value is UserTaskInterface => {
//     if ('tasks' in value) {
//       return true;
//     } else {
//       return false;
//     }
//   },
// };

// function useData<T extends UserInterface | UserTaskInterface>(
//   db: Firestore,
//   uid: string,
//   collection: string,
//   type: keyof typeof isData
// ) {
//   const [data, setData] = React.useState<T | null>(null);
//   const [loading, setLoading] = React.useState(true);

//   const getData = async () => {
//     setLoading(true);
//     const docRef = doc(db, collection, uid);
//     const docSnap = await getDoc(docRef);
//     const docData = docSnap.data() as unknown;
//     if (docSnap.exists() && isData[type](docData)) {
//       setData(docData);
//     } else {
//       setData(null);
//     }
//     setLoading(false);
//   };

//   React.useEffect(() => {
//     getData();
//   }, []);

//   return { data, getData, loading };
// }

// export default useData;

export {};
