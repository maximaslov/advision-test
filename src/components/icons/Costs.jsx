const Costs = ({ color }) => {
  return (
    <svg width="13" height="16" viewBox="0 0 13 16">
      <path
        d="M5.64103 4.25C5.64103 4.1125 5.52564 4 5.38462 4H2.30769C2.16635 4 2.05128 4.1125 2.05128 4.25C2.05128 4.3875 2.16635 4.5 2.30769 4.5H5.38462C5.52564 4.5 5.64103 4.3875 5.64103 4.25ZM2.30769 2.5H5.38462C5.52583 2.5 5.64103 2.38769 5.64103 2.25C5.64103 2.11231 5.52564 2 5.38462 2H2.30769C2.16635 2 2.05128 2.11219 2.05128 2.25C2.05128 2.38781 2.16635 2.5 2.30769 2.5ZM12.0064 4.70625L7.47756 0.290625C7.28846 0.105344 7.02564 0 6.75321 0H2.05128C0.918269 0 0 0.895313 0 2L0.000208333 14C0.000208333 15.1044 0.918478 16 2.05149 16H10.2564C11.3894 16 12.3077 15.1044 12.3077 14V5.41563C12.3077 5.15 12.1987 4.89375 12.0064 4.70625ZM7.17949 0.707187L11.5833 5H7.94872C7.52564 5 7.17949 4.6625 7.17949 4.25V0.707187ZM11.7949 14C11.7949 14.8272 11.1048 15.5 10.2564 15.5H2.05128C1.20288 15.5 0.512821 14.8272 0.512821 14V2C0.512821 1.17281 1.20288 0.5 2.05128 0.5H6.66667V4.25C6.66667 4.93937 7.24167 5.5 7.94872 5.5H11.7949V14ZM6.21795 10.2594L5.98407 10.1959C4.99401 9.92638 4.51356 9.67153 4.63375 9.02684C4.76096 8.34122 5.70042 8.16653 6.57381 8.29153C6.79766 8.32375 7.06612 8.39116 7.41933 8.50441C7.55305 8.54834 7.69827 8.47609 7.74272 8.34522C7.78718 8.21435 7.71418 8.07275 7.57946 8.02991C7.1974 7.90684 6.90125 7.83362 6.64901 7.79747C6.56676 7.78551 6.49058 7.78331 6.41112 7.77611V7.25C6.41112 7.11231 6.29567 7 6.15397 7C6.01228 7 5.89744 7.1125 5.89744 7.25V7.75938C4.90705 7.79688 4.26282 8.21875 4.12821 8.93437C3.90234 10.1453 5.11827 10.4775 5.84487 10.6756L6.08224 10.7391C7.26109 11.0516 7.80212 11.2753 7.67167 11.9735C7.54497 12.6591 6.6066 12.8347 5.73064 12.7088C5.37615 12.659 4.96782 12.5223 4.60788 12.4012L4.44013 12.3455C4.30542 12.2986 4.16067 12.3709 4.11449 12.5017C4.06891 12.6326 4.14103 12.7742 4.27474 12.818L4.44231 12.875C4.82436 13.0029 5.25705 13.1484 5.65833 13.2041C5.7426 13.2163 5.81801 13.2149 5.89923 13.2224V13.75C5.89923 13.8877 6.01317 14 6.1549 14C6.29664 14 6.41205 13.8877 6.41205 13.75V13.2359C7.37263 13.1965 8.04474 12.7797 8.1784 12.0647C8.40705 10.8375 7.19231 10.5156 6.21795 10.2594Z"
        fill={color ?? "#8A8A8A"}
      />
    </svg>
  );
};

export default Costs;
