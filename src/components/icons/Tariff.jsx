const Tariff = ({ color }) => {
  return (
    <svg width="13" height="16" viewBox="0 0 13 16">
      <path
        d="M6.14011 3C6.26099 3 6.35989 3.11188 6.35989 3.25V4.35C6.54121 4.35313 6.72527 4.36875 6.90934 4.4C7.17308 4.44375 7.43407 4.52813 7.68956 4.6125C7.76648 4.6375 7.84341 4.6625 7.91758 4.68438C8.03572 4.72188 8.10439 4.85938 8.07143 4.99375C8.03846 5.125 7.91758 5.20313 7.77747 5.16875C7.72528 5.14375 7.64835 5.11875 7.57418 5.06563C7.33242 5.01563 7.09066 4.93438 6.84615 4.89375C6.21429 4.7875 5.62637 4.87813 5.18681 5.09375C4.74176 5.28438 4.4533 5.64063 4.41758 6.00313C4.34341 6.46563 4.51099 6.82813 4.8544 7.075C5.21429 7.3375 5.73626 7.50625 6.30494 7.69063L6.43132 7.73125C6.9478 7.89688 7.48626 8.06875 7.93132 8.41563C8.42582 8.80313 8.6511 9.40625 8.54121 10.0813C8.43956 10.7094 8.06044 11.1406 7.5467 11.375C7.2033 11.5313 6.79945 11.6063 6.35989 11.6031V12.75C6.35989 12.8875 6.26099 13 6.14011 13C6.01923 13 5.92033 12.8875 5.92033 12.75V11.575C5.8489 11.5656 5.77472 11.5563 5.6978 11.5438C5.47253 11.5031 5.06868 11.3719 4.73352 11.2563C4.52473 11.1844 4.31593 11.1094 4.10714 11.0313C3.99176 10.9875 3.92857 10.8469 3.96703 10.7156C4.00549 10.5844 4.12912 10.5125 4.24451 10.5563C4.42582 10.6344 4.65659 10.7063 4.83791 10.7781C5.2033 10.8969 5.5522 11.0156 5.76374 11.05C6.40385 11.1281 6.96703 11.1 7.38187 10.9125C7.78846 10.725 8.04121 10.4125 8.10989 9.99063C8.16209 9.50625 8.03571 9.10625 7.68132 8.82813C7.28297 8.51875 6.79945 8.36563 6.33517 8.21875C6.27198 8.2 6.20879 8.18125 6.14835 8.15938C5.60989 7.9875 5.03297 7.8 4.61538 7.49688C4.12637 7.14063 3.87912 6.57188 3.98626 5.9125C4.07967 5.32813 4.48901 4.89063 5.01099 4.63438C5.28022 4.50313 5.59066 4.4125 5.92033 4.37188V3.22188C5.92033 3.11188 6.01923 2.97188 6.14011 2.97188V3ZM0 3C0 1.89531 0.787088 1 1.75824 1H10.5495C11.5192 1 12.3077 1.89531 12.3077 3V13C12.3077 14.1031 11.5192 15 10.5495 15H1.75824C0.787088 15 0 14.1031 0 13V3ZM0.43956 3V13C0.43956 13.8281 1.02995 14.5 1.75824 14.5H10.5495C11.2775 14.5 11.8681 13.8281 11.8681 13V3C11.8681 2.17156 11.2775 1.5 10.5495 1.5H1.75824C1.02995 1.5 0.43956 2.17156 0.43956 3Z"
        fill={color ?? "#8A8A8A"}
      />
    </svg>
  );
};

export default Tariff;
