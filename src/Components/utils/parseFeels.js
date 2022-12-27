const parseFeels = letters => {
  const totalFeels = {};

  letters?.forEach(letter => {
    letter.feels.forEach(feel => {
      totalFeels[feel] = totalFeels[feel] ? totalFeels[feel] + 1 : 1;
    });
  });

  return totalFeels;
};

export default parseFeels;
