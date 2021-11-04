const Clockp = ({locale}) => {
    return (
      <span>
        {new Date().toLocaleTimeString(locale)}
      </span>
    );
  }

  export default Clockp;
