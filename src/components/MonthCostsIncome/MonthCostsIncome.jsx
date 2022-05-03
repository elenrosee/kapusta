import { useSelector } from 'react-redux';
import { getReportsData } from 'redux/transactions';
import { Sum, TypeText, Wraper } from './MonthCostsIncome.styled';

export const MonthCostsIncome = () => {
  const reportsData = useSelector(getReportsData);

  const typeSum = arr => {
    const sum = arr?.reduce((acc, item) => acc + item.sum, 0);
    return sum;
  };

  return (
    <Wraper>
      <div>
        <TypeText>Расходы:</TypeText>
        <Sum type={'costs'}>- {typeSum(reportsData.costs)} грн.</Sum>
      </div>
      <div>
        <TypeText>Доходы:</TypeText>
        <Sum type={'income'}>+ {typeSum(reportsData.income)} грн.</Sum>
      </div>
    </Wraper>
  );
};
