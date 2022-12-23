const fetchUserLetters = async userId => {
  try {
    const q = query(collection(db, "letters"), where("uid", "==", userId));
    const docs = await getDocs(q);
    const letters = docs.docs.map(doc => doc.data());
    return { isSuccess: true, letters: letters };
  } catch (err) {
    return { isSuccess: false, letters: [] };
  }
};

export default fetchUserLetters;
