const SeatLayoutA220_100 = ({ onSeatClick, selectedSeat }) => {
  const getSeatClasses = (seatLetter, seatNumber) => {
    const seatColorMap = {
      E: 'bg-accent',
      D: 'bg-secondary',
      C: 'bg-accent',
      B: 'bg-secondary',
      A: 'bg-accent',
    };

    const isSelected = selectedSeat === `${seatLetter}${seatNumber}`;
    const isBOrD = seatLetter === 'B' || seatLetter === 'D';

    if (seatLetter === 'C' && seatNumber >= 1 && seatNumber <= 5) {
      return 'disabled';
    }

    if (isBOrD && isSelected) {
      return `cursor-pointer bg-red-500 border border-primary rounded-sm text-white`;
    }

    return `cursor-pointer ${seatColorMap[seatLetter]} border border-primary rounded-sm text-white ${isSelected ? 'bg-red-500' : ''}`;
  };

  return (
    <div className="relative">
      <table className="mx-auto mt-10">
        <tbody>
          {['E', 'D', 'C', 'B', 'A'].map((rowLetter) => (
            <tr key={rowLetter}>
              {Array.from({ length: 25 }, (_, index) => {
                const seatNumber = `${rowLetter}${index + 1}`;
                const seatClasses = getSeatClasses(rowLetter, index + 1);
                const isCSeatInRange = rowLetter === 'C' && index + 1 >= 1 && index + 1 <= 5;

                return (
                  <td
                    key={seatNumber}
                    className={isCSeatInRange ? 'blank' : seatClasses}
                    onClick={() => onSeatClick(isCSeatInRange ? null : seatNumber)}
                  >
                    {isCSeatInRange ? '' : seatNumber}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SeatLayoutA220_100;