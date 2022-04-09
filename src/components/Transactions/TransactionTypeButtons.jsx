/* eslint-disable react/prop-types */
export const TransactionTypeButtons = ({ setType }) => {
  return (
    <>
      <button
        onClick={() => {
          setType('costs');
        }}
        type="submit"
      >
        <p>Расход</p>
      </button>
      <button
        onClick={() => {
          setType('income');
        }}
        type="submit"
      >
        <p>Доход</p>
      </button>
    </>
  );
};
