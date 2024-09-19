function MyClockTime(){
  let today = new Date();
  today = today.toLocaleString();

  return(
    <div>
      <p>
        {today}
      </p>
    </div>
  );
}
export default MyClockTime;