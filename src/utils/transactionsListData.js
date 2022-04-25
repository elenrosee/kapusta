export const transactionsListData = transactionsList => {
  const data = [];

  if (transactionsList.length < 10) {
    for (let i = 0; i < 10; i += 1) {
      transactionsList[i]
        ? data.push({
            date: `${transactionsList[i].day}.${transactionsList[i].month}.${transactionsList[i].year}`,
            description: transactionsList[i].description,
            category: transactionsList[i].category,
            sum:
              transactionsList[i].type === 'costs'
                ? `- ${transactionsList[i].sum} грн.`
                : `${transactionsList[i].sum} грн.`,
            id: transactionsList[i]._id,
            type: transactionsList[i].type,
            createdAt: transactionsList[i].createdAt,
          })
        : data.push({
            date: '',
            description: '',
            category: '',
            sum: '',
            id: null,
            type: '',
            createdAt: '',
          });
    }
  } else {
    transactionsList.forEach(
      ({ day, month, year, description, category, sum, _id }) =>
        data.push({
          date: `${day}.${month}.${year}`,
          description,
          category,
          sum,
          id: _id,
        })
    );
  }

  return data.sort((a, b) => {
    if (a.createdAt > b.createdAt) {
      return -1;
    } else {
      return 1;
    }
  });
};
