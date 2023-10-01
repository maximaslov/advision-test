const Arrow = ({ color }) => {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14">
      <path
        d="M11.3059 5.1121L6.99956 9.09705L2.69322 5.1121C2.61628 5.04076 2.513 5.00082 2.40545 5.00082C2.29789 5.00082 2.19461 5.04076 2.11767 5.1121C2.08041 5.14675 2.05082 5.18811 2.03061 5.23375C2.01041 5.2794 2 5.32841 2 5.37793C2 5.42744 2.01041 5.47645 2.03061 5.5221C2.05082 5.56774 2.08041 5.6091 2.11767 5.64375L6.69886 9.88389C6.77931 9.95834 6.88721 10 6.99956 10C7.11191 10 7.21981 9.95834 7.30026 9.88389L11.8815 5.64457C11.919 5.60989 11.9488 5.56843 11.9691 5.52264C11.9895 5.47684 12 5.42763 12 5.37793C12 5.32822 11.9895 5.27901 11.9691 5.23322C11.9488 5.18742 11.919 5.14596 11.8815 5.11128C11.8045 5.03994 11.7012 5 11.5937 5C11.4861 5 11.3828 5.03994 11.3059 5.11128V5.1121Z"
        fill={color ?? "#8A8A8A"}
      />
    </svg>
  );
};

export default Arrow;
